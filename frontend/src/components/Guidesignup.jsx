import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Navbar } from './Navbar';
import axios from 'axios';
export const Guidesignup= () => {
        const [GuideData, setGuideData] = useState({
          G_Uname: '',
          G_Name: '',
          G_Email: '',
          G_Mobile: '',
          G_Adhaar: '',
          G_Pass: '',
          G_Dob: '',
          GL_Color:'',
          G_Lno:'',
          GL_valid:''
        });
        const redirect=useNavigate();
        const [validationErrors, setValidationErrors] = useState({});
        const [GuideImage, setImageData] = useState({
          G_Image: null
        });
        const [GuideLImage, setLImageData] = useState({
          GL_Image: null
        });
        const handleInputChange = (e) => {
          const { name, value } = e.target;
          setGuideData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
      
          // Additional frontend validations
          if (name === 'G_Adhaar' && !/^\d{12}$/.test(value)) {
            setValidationErrors((prevErrors) => ({
              ...prevErrors,
              [name]: 'Aadhaar must be 12 digits',
            }));
          } else if (name === 'G_Mobile' && !/^\d{10}$/.test(value)) {
            setValidationErrors((prevErrors) => ({
              ...prevErrors,
              [name]: 'Mobile must be 10 digits',
            }));
          } else if (name === 'G_Email' && !/^\S+@\S+\.\S+$/.test(value)) {
            setValidationErrors((prevErrors) => ({
              ...prevErrors,
              [name]: 'Invalid email format',
            }));
          } else if (name === 'G_Dob') {
            // Additional validation for age above 18
            const dob = new Date(value);
            const currentDate = new Date();
            const age = currentDate.getFullYear() - dob.getFullYear();
            if (age < 18) {
              setValidationErrors((prevErrors) => ({
                ...prevErrors,
                [name]: 'Guide must be 18 or older',
              }));
            } else {
              setValidationErrors((prevErrors) => ({
                ...prevErrors,
                [name]: '',
              }));
            }
          } else if (name === 'G_Pass') {
            // Password sGngth validation
            if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)) {
              setValidationErrors((prevErrors) => ({
                ...prevErrors,
                [name]: 'Password must be strong (at least 8 characters with 1 uppercase, 1 lowercase, 1 number, and 1 special character)',
              }));
            } else {
              setValidationErrors((prevErrors) => ({
                ...prevErrors,
                [name]: '',
              }));
            }
          } else {
            setValidationErrors((prevErrors) => ({
              ...prevErrors,
              [name]: '',
            }));
          }
        };
      
        const handleImageChange = (e) => {
          const file = e.target.files[0];
          setImageData((prevData) => ({
            ...prevData,
            G_Image: file,
          }));
        };
        const handleLImageChange = (e) => {
          const file = e.target.files[0];
          setLImageData((prevData) => ({
            ...prevData,
            GL_Image: file,
          }));
        };        const handleSubmit = async (e) => {
          e.preventDefault();
      

          // Validation check before submitting
          if (Object.values(validationErrors).every((error) => error === '')) {
          
            
            try {
              axios.post("http://localhost:9000/signup/Guide",GuideData)
        .then((data)=>{console.log(data)})
        .catch(err=>console.log(err));
        redirect('/');
            } catch (error) {
              console.error('Error:', error.message);
              redirect('/');
            }
          } else {
            console.log('Validation errors. Cannot submit.');
          }
         
        };
        
        return (
            <>
            <Navbar/>
            <br/>
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="G_Uname" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="G_Uname"
                  name="G_Uname"
                  value={GuideData.G_Uname}
                  onChange={handleInputChange}
                  required
                />
                {validationErrors.G_Uname && (
                  <div className="text-danger">{validationErrors.G_Uname}</div>
                )}
              </div>
      
              <div className="mb-3">
                <label htmlFor="G_Name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="G_Name"
                  name="G_Name"
                  value={GuideData.G_Name}
                  onChange={handleInputChange}
                  required
                />
                {/* Add any additional validations for first name */}
              </div>
      
              <div className="mb-3">
                <label htmlFor="G_Email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="G_Email"
                  name="G_Email"
                  value={GuideData.G_Email}
                  onChange={handleInputChange}
                  required
                />
                {validationErrors.G_Email && (
                  <div className="text-danger">{validationErrors.G_Email}</div>
                )}
              </div>
      
              <div className="mb-3">
                <label htmlFor="G_Mobile" className="form-label">
                  Mobile
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="G_Mobile"
                  name="G_Mobile"
                  value={GuideData.G_Mobile}
                  onChange={handleInputChange}
                  required
                />
                {validationErrors.G_Mobile && (
                  <div className="text-danger">{validationErrors.G_Mobile}</div>
                )}
              </div>
      
              <div className="mb-3">
                <label htmlFor="G_Adhaar" className="form-label">
                  Aadhaar
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="G_Adhaar"
                  name="G_Adhaar"
                  value={GuideData.G_Adhaar}
                  onChange={handleInputChange}
                  required
                />
                {validationErrors.G_Adhaar && (
                  <div className="text-danger">{validationErrors.G_Adhaar}</div>
                )}
              </div>
      
              <div className="mb-3">
          <label htmlFor="G_Pass" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="G_Pass"
            name="G_Pass"
            value={GuideData.G_Pass}
            onChange={handleInputChange}
            required
          />
          {validationErrors.G_Pass && (
            <div className="text-danger">{validationErrors.G_Pass}</div>
          )}
        </div>
      
              <div className="mb-3">
                <label htmlFor="G_Dob" className="form-label">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="G_Dob"
                  name="G_Dob"
                  value={GuideData.G_Dob}
                  onChange={handleInputChange}
                  required
                />
                {validationErrors.G_Dob && (
                  <div className="text-danger">{validationErrors.G_Dob}</div>
                )}
              </div>
      
              <div className="mb-3">
                <label htmlFor="G_Image" className="form-label">
                  Guide Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="G_Image"
                  name="G_Image"
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </div>
                        <div className="mb-3">
              <label htmlFor="G_Lno" className="form-label">
              License No
              </label>
              <input
                  type="text"
                  className="form-control"
                  id="G_Lno"
                  name="G_Lno"
                  value={GuideData.G_Lno}
                  onChange={handleInputChange}
                  required
              />
              {/* Add any additional validations for last name */}
          </div>
              <div className="mb-3">
              <label htmlFor="GL_Color" className="form-label">
                  License Color
              </label>
              <select
                  className="form-control"
                  id="GL_Color"
                  name="GL_Color"
                  value={GuideData.GL_Color}
                  onChange={handleInputChange}
                  required
              >
                  <option value="">Select License Color</option>
                  <option value="Blue">Blue</option>
                  <option value="Green">Green</option>
                  <option value="Yellow">Yellow</option>
              </select>
              {validationErrors.GL_Color && (
                  <div className="text-danger">{validationErrors.GL_Color}</div>
              )}
          </div>
          
          <div className="mb-3">
                <label htmlFor="GL_valid" className="form-label">
                  License Validity
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="GL_valid"
                  name="GL_valid"
                  value={GuideData.GL_Valid}
                  onChange={handleInputChange}
                  required
                />
              </div>
      
          <div className="mb-3">
                <label htmlFor="GL_Image" className="form-label">
                  License Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="GL_Image"
                  name="GL_Image"
                  onChange={handleLImageChange}
                  accept="image/*"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </form>
          </div>
          <br/>
          </>
        );
      };
