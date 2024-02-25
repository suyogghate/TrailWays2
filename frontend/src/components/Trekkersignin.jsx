import React, { useState,useEffect } from 'react';
import { Navbar } from './Navbar';
import { useNavigate} from 'react-router-dom';
import { useAuth } from '../Hooks/AuthContext';
import axios from 'axios';
export const Trekkersignin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [TrekkerData, setTrekkerData] = useState([]);
  const [error, setError] = useState('');

  useEffect(
      ()=>{
          axios.get("http://localhost:9000/trekker")
          .then((res)=>{setTrekkerData(res.data)})
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

    // Find the Trekker in the data array with the entered username
    const Trekker = TrekkerData.find((Trekker) => Trekker.Tre_Uname === username);

    if (Trekker && Trekker.Tre_Pass === password) {
      // On successful sign-in
      dispatch({ type: 'LOGIN', payload: { username: Trekker.Tre_Uname } });

      // Redirect to Trekker dashboard or other pages
      redirect('/trekkerdash');
    } else {
      // Handle authentication failure
      setError('Invalid username or password');
    }
  };
  
    return (
        <>
        <Navbar/>
      <div className="container mt-5 trekker-signin-container" >
        <h2>Trekker Sign In</h2>
        <form>
        <div className="mb-3">
            <label htmlFor="TrekkerUsername" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="TrekkerUsername"
              name="username"
              value={credentials.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="TrekkerPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="TrekkerPassword"
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