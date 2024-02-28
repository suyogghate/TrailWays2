import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UnauthorizedAccess = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Redirect to the main page after 5 seconds
    const redirectTimeout = setTimeout(() => {
      navigate('/');
    }, 5000);

    // Update countdown every second
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Clear the timeouts and intervals to avoid issues
    return () => {
      clearTimeout(redirectTimeout);
      clearInterval(countdownInterval);
    };
  }, [navigate]);

  return (
    <div className="container mt-5">
      <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">Unauthorized Access!</h4>
        <p>You are not authorized to view this page.</p>
        <hr />
        <p className="mb-0">
          Redirecting to the main page in {countdown} seconds. If not,{' '}
          <Link to="/">Click Here !!</Link>.
        </p>
      </div>
    </div>
  );
};

export default UnauthorizedAccess;