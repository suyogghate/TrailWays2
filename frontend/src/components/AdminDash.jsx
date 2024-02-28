import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { useAuth } from '../Hooks/AuthContext';
import { Navbar } from './Navbar';
import { Link ,useNavigate} from 'react-router-dom';
import {SlotForm} from './SlotForm' ;
import { TrekDetailsForm } from './TrekDetailsForm';
const AdminDash = () => {
  const { state } = useAuth();
  const { user } = state;
  const redirect=useNavigate();
  const [AdminData, setAdminData] = useState([]);
  useEffect(
    ()=>{
        axios.get("http://localhost:9000/admin")
        .then((res)=>{setAdminData(res.data)})
        .catch(err=>console.log(err));
    },[]);
  
  
  // Now you can access user credentials, assuming they were set during login
  if (user) {
    const { username } = user;
    const admin = AdminData.find((admin) => admin.A_Username === username);
    if (admin && admin.A_Username === username) {
      console.log('Username:', username);
    } else {
      // Handle authentication failure
      redirect('/wrongaccess');
    }
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
        <div>
          <h2 className='d-flex justify-content-center m-2' >Welcome, {user.username}!</h2>
          {/* Other dashboard content */}
        </div>
        </div>
      )}

    </div>

    <br/>
    <SlotForm/>
    <br/>
    <TrekDetailsForm/>
    <br/>
    </>
  );
};

export default AdminDash;