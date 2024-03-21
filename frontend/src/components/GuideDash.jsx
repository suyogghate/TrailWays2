// GuideDash.js
import React from 'react';
import { useAuth } from '../Hooks/AuthContext';
import { Navbar } from './Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import GuideDashTable from './GuideDashTable';

const GuideDash = () => {
  const { state } = useAuth();
  const { user } = state;
  const redirect = useNavigate();
  const [guideDataLoaded, setGuideDataLoaded] = useState(false);
  const [guideData, setGuideData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/guide")
      .then((res) => {
        setGuideData(res.data);
        setGuideDataLoaded(true);
      })
      .catch(err => console.log(err));
  }, []);

  // Now you can access user credentials, assuming they were set during login
  if (user && guideDataLoaded) {
    const { username } = user;
    const guide = guideData.find((guide) => guide.G_Uname === username);
    if (guide && guide.G_Uname === username) {
      console.log('Username:', username);
    } else {
      // Handle authentication failure
      redirect('/wrongaccess');
    }
  }

  return (
    <>
      <Navbar />
      <br />
      <div className='d-flex justify-content-end m-2'>
        <button className='btn btn-danger'>
          <Link to='/signout' className='text-white'>Sign Out</Link>
        </button>
      </div>
      <br />
      <div className="text-center"> {/* Centering the heading */}
        {user && (
          <div>
            <h2>Welcome, {user.username}!</h2>
            <GuideDashTable />
          </div>
        )}
      </div>
      <br />
    </>
  );
};

export default GuideDash;