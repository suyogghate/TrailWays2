import React from 'react';
import { useAuth } from '../Hooks/AuthContext';
import { Navbar } from './Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';

export const Booking = () => {
  const { state } = useAuth();
  const { user } = state;
  const redirect=useNavigate();
  const [trekkerDataLoaded, setTrekkerDataLoaded] = useState(false);
  const [TrekkerData, setTrekkerData] = useState([]);
  const [TrekData, setTrekData] = useState([]);
  const {id} =useParams();
  const [formData, setFormData] = useState({
    A_Totalpeople: parseInt(0),
    A_TrekIdname: parseInt(id),
    S_SlotDetails: '',
    A_Trekkeruname:'',
    A_Guide: '',
    B_TotalAmount: 0
  });
  const [GuideData, setGuideData] = useState([]);
  const [SlotData, setSlotData] = useState([]);
   // Initialize with the default value for a number
  const [PriceOutputValue, setPriceOutputValue] = useState('');
  useEffect(
    ()=>{
        axios.get("http://localhost:9000/trekker")
        .then((res)=>{setTrekkerData(res.data);
          setTrekkerDataLoaded(true);})
        .catch(err=>console.log(err));
    },[]);
  
  
  // Now you can access user credentials, assuming they were set during login
  useEffect(() => {
    // Now you can access user credentials, assuming they were set during login
    if (user && trekkerDataLoaded) {
      const { username } = user;
      const trekker = TrekkerData.find((trekker) => trekker.Tre_Uname === username);
      if (trekker && trekker.Tre_Uname === username) {
        console.log('Username:', username);
        // Set A_Trekkeruname in formData when trekkerData is available
        setFormData((prevData) => ({
          ...prevData,
          A_Trekkeruname: trekker.Tre_Uname || '', // Set to an empty string if trekker is undefined
        }));
      } else {
        // Handle authentication failure
        redirect('/wrongaccess');
      }
    }
  }, [user, trekkerDataLoaded, TrekkerData, redirect]);
  
  useEffect(() => {
    axios.get("http://localhost:9000/guidelicense")
      .then((res) => {
        setGuideData(res.data);;
      })
      .catch(err => console.log('Error fetching guide data:', err));
  }, []);
  
  useEffect(() => {

    axios.get(`http://localhost:9000/slots/${id}`)
      .then((res) => {
        setSlotData(res.data);
      })
      .catch(err => console.log('Error fetching slot data:', err));
  }, [id]);
  useEffect(() => {
   axios.get(`http://localhost:9000/trekdetails/${id}`)
      .then((res) => {
        setTrekData(res.data[0]);
      })
      .catch(err => console.log('Error fetching trek data:', err));
  }, [id]);


    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        B_TotalAmount: parseInt(PriceOutputValue),
      }));
    };

    const handlePeopleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      const totalPeople = value || 0;
      const perPrice = TrekData.Td_PerPrice || 0;
      const totalAmount = totalPeople * perPrice;
      setPriceOutputValue(totalAmount);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post("http://localhost:9000/bookings", formData)
        .then((data) => {
          console.log(data);
          redirect('/successrequest');
        })
        .catch(err => {
          console.log(formData);
          console.log(err);
          alert("Booking Failed");
        });
    };

    return (
      <>
        {/* ... other components ... */}
        <Navbar/>
        <div className="container mt-4">
          <h2>Book Your Trek</h2><br />
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="A_Totalpeople" className="form-label">
                Total People
              </label>
              <input
                type="number"
                className="form-control"
                id="A_Totalpeople"
                name="A_Totalpeople"
                value={formData.A_Totalpeople}
                onChange={handlePeopleInputChange}
                required
              />
            </div>
  
            <div className="mb-3">
            <label htmlFor="S_SlotDetails" className="form-label">
              Slot Details
            </label>
            <select
              className="form-control"
              id="S_SlotDetails"
              name="S_SlotDetails"
              value={formData.S_SlotDetails}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>Select Slot Details</option>
              {
                SlotData.map((slot) => (
                  <option key={slot.S_RandomSlot} value={slot.S_RandomSlot}>
                    {`Random Slot: ${slot.S_RandomSlot}, Slot Date: ${new Date(slot.S_Slotdate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })} `}
                  </option>
                ))
              }
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="S_Guide" className="form-label">
              Guide
            </label>
            <select
              className="form-control"
              id="S_Guide"
              name="S_Guide"
              value={formData.S_Guide}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>Select Guide</option>
              {
                GuideData.map((guide) => (
                  <option key={guide.G_Uname} value={guide.G_Uname}>
                    {`${guide.GL_Color} - ${guide.G_Name} `}
                  </option>
                ))
              }
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="B_TotalAmount" className="form-label">
              Total Amount
            </label>
            <h1><p className="text-muted">₹{PriceOutputValue}</p></h1>
          </div>
  
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </>
    );
  };