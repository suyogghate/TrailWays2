import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useAuth } from '../Hooks/AuthContext';
import data from "../images/images.json";

export const TrekDetails = () => {
  const { id } = useParams();
  const [cardDetails, setCardDetails] = useState(null);
  const { state } = useAuth();
  const { user } = state;
  const [TrekkerData, setTrekkerData] = useState([]);
  const navigate = useNavigate();

  // Now you can access user credentials, assuming they were set during login
  if (user) {
    const { username } = user;
    console.log('Username:', username);
  }

  useEffect(() => {
    const details = data.find((card) => card.id === parseInt(id));
    setCardDetails(details);
  }, [id]);

  useEffect(() => {
    axios
      .get('http://localhost:9000/trekkername')
      .then((res) => {
        setTrekkerData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const GoBook = () => {
    if (user && user.username) {
      const isTrekker = TrekkerData.some((Trekker) => Trekker.Tre_Uname === user.username);
  
      if (isTrekker) {
        // If the user is a Trekker, allow navigation to the booking page
        navigate(`/trekdetails/booking/${id}`);
      } else {
        // If the user is not a Trekker, show an alert
        alert("Sorry, you can't do the booking, you are not a Trekker!!!");
      }
    } else {
      // If user or username is null, show an alert
      alert("Sorry, you can't do the booking. Please log in to continue.");
    }
  };

   return (
    <>
      <Navbar />
      <div className="container mt-4">
        {cardDetails ? (
          <div className='m-2 d-flex flex-column align-items-center'>
            <h1 className='m-2' style={{ color: 'green' }}>Overview</h1>
            <div className='m-2'>
              <img src={cardDetails.imageUrl} alt='img' style={{ color: 'green', maxWidth: '100%' }} />
            </div>
            <p className='m-2'>{cardDetails.overview}</p>
            <Button
              variant="success"
              onClick={GoBook}
              className='m-2'
              style={{ color: 'white', textDecoration: 'none', width: '100px' }}
            >
              Book Now
            </Button>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
};