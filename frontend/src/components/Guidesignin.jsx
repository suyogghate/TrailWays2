import React ,{ useEffect, useState } from "react";
import { Navbar } from './Navbar';
import { useNavigate} from 'react-router-dom';
import { useAuth } from '../Hooks/AuthContext';
import axios from "axios";
export const Guidesignin = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [guideData, setGuideData] = useState([]);
    const [error, setError] = useState('');
  
    useEffect(
        ()=>{
            axios.get("http://localhost:9000/guide")
            .then((res)=>{setGuideData(res.data)})
            .catch(err=>console.log(err));
        },[]);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setCredentials((prevCredentials) => ({
        ...prevCredentials,
        [name]: value,
      }));
    };
  const { dispatch } = useAuth();
  const redirect = useNavigate();

  const handleSignIn = () => {
      // Validate credentials and sign in logic
      const { username, password } = credentials;
  
      // Find the guide in the data array with the entered username
      const guide = guideData.find((guide) => guide.G_Uname === username);
  
      if (guide && guide.G_Pass === password) {
        // On successful sign-in
        dispatch({ type: 'LOGIN', payload: { username: guide.G_Uname } });
  
        // Redirect to guide dashboard or other pages
        redirect('/guidedash');
      } else {
        // Handle authentication failure
        setError('Invalid username or password');
      }
    };
  
    return (
        <>
        <Navbar/>
      <div className="container mt-5 ">
        <h2>Guide Sign In</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="guideUsername" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="guideUsername"
              name="username"
              value={credentials.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="guidePassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="guidePassword"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="button" className="btn btn-primary" onClick={handleSignIn}>
            Sign In
          </button>
          {error && <div className="text-danger">{error}</div>}
        </form>
      </div>
      </>
    );
  };