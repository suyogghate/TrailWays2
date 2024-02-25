// GuideDash.js
import React from 'react';
import { useAuth } from '../Hooks/AuthContext';
import { Navbar } from './Navbar';
import { Link } from 'react-router-dom';

const AdminDash = () => {
  const { state } = useAuth();
  const { user } = state;

  // Now you can access user credentials, assuming they were set during login
  if (user) {
    const { username } = user;
    console.log('Username:', username);
  }
  
  return (
    <>
    <Navbar/>
    <br/>
    <div className='d-flex justify-content-end m-2'><button className='btn btn-danger'><Link to='/signout' className='text-white'>Sign Out</Link></button></div>
    <br/>
    <div>
      {user && (
        <div>
          <h2>Welcome, {user.username}!</h2>
          {/* Other dashboard content */}
        </div>
      )}
    </div>
    <br/>
    </>
  );
};

export default AdminDash;