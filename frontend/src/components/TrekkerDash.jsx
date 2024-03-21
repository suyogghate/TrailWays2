// TrekkerDash.js
import React from 'react';
import { useAuth } from '../Hooks/AuthContext';
import { Navbar } from './Navbar';
import { Link,useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';
import TrekkerDashTable from './TrekkerDashTable';
const TrekkerDash = () => {
  const { state } = useAuth();
  const { user } = state;
  const redirect=useNavigate();
  const [trekkerDataLoaded, setTrekkerDataLoaded] = useState(false);
  const [TrekkerData, setTrekkerData] = useState([]);
  useEffect(
    ()=>{
        axios.get("http://localhost:9000/trekker")
        .then((res)=>{setTrekkerData(res.data);
          setTrekkerDataLoaded(true);})
        .catch(err=>console.log(err));
    },[]);
  
  
  // Now you can access user credentials, assuming they were set during login
  if (user&&trekkerDataLoaded) {
    const { username } = user;
    const trekker = TrekkerData.find((trekker) => trekker.Tre_Uname === username);
    if (trekker && trekker.Tre_Uname === username) {
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
            <h1>Welcome, {user.username}!</h1>
            <TrekkerDashTable />
          </div>
        )}
      </div>
      <br />
    </>
  );
};

export default TrekkerDash;