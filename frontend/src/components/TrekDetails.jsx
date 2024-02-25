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
    const isTrekker = TrekkerData.some((Trekker) => Trekker.Tre_Uname === user.username);

    if (isTrekker) {
      // If the user is a Trekker, allow navigation to the booking page
      navigate(`/trekdetails/booking/${id}`);
    } else {
      // If the user is not a Trekker, show an alert
      alert("Sorry, you can't do the booking, you are not a Trekker!!!");
    }
  };

  return (
    <>
      <Navbar />
      {cardDetails ? (
        <div>
          <h1 style={{ color: 'green' }}>Overview</h1>
          <p>{cardDetails.overview}</p>
          <Button variant="success" onClick={GoBook} style={{ color: 'white', textDecoration: 'none', width: '100px' }}>
            Book Now
          </Button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};