import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SuccessfulBooking = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Redirect to the main page after 5 seconds
    const redirectTimeout = setTimeout(() => {
      navigate('/trekkerdash');
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
      <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">Successful Booking!</h4>
        <p>Your Booking was successful.</p>
        <hr />
        <p className="mb-0">
          Redirecting to the main page in {countdown} seconds. If not,{' '}
          <Link to="/trekkerdash">Click Here !!</Link>.
        </p>
      </div>
    </div>
  );
};

export default SuccessfulBooking;