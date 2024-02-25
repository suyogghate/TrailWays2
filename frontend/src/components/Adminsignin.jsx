import React, { useState,useEffect } from 'react';
import { Navbar } from './Navbar';
import { useNavigate} from 'react-router-dom';
import { useAuth } from '../Hooks/AuthContext';
import axios from "axios";
export const Adminsignin = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [AdminData, setAdminData] = useState([]);
    const [error, setError] = useState('');
  
    useEffect(
        ()=>{
            axios.get("http://localhost:9000/admin")
            .then((res)=>{setAdminData(res.data)})
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
  
      // Find the admin in the data array with the entered username
      const admin = AdminData.find((admin) => admin.A_Username === username);
  
      if (admin && admin.A_Password === password) {
        // On successful sign-in
        dispatch({ type: 'LOGIN', payload: { username: admin.A_Username } });
  
        // Redirect to admin dashboard or other pages
        redirect('/admindash');
      } else {
        // Handle authentication failure
        setError('Invalid username or password');
      }
    };
  
  
    return (
        <>
        <Navbar/>
      <div className="container mt-5 ">
        <h2>Admin Sign In</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="adminUsername" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="adminUsername"
              name="username"
              value={credentials.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="adminPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="adminPassword"
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