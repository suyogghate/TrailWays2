// GuideDash.js
import React from 'react';
import { useAuth } from '../Hooks/AuthContext';
import { useNavigate } from 'react-router-dom';
const SignOut = () => {
  const { state, dispatch } = useAuth();
  const { user } = state;
    const redirect =useNavigate();
  const handleSignOut = () => {
    // Dispatch LOGOUT action
    dispatch({ type: 'LOGOUT' });
    redirect('/');
    // Redirect or perform other actions after sign-out if needed
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-black">
  {user && (
    <div className="d-flex flex-column align-items-center">
      <h2 className="text-white">Okay Bye {user.username} !!</h2>
      {/* Other dashboard content */}
      <button className="btn btn-dark" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  )}
</div>
  );
};

export default SignOut;