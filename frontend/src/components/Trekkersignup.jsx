import React, { useState } from 'react';
import { redirect } from "react-router-dom";
import { Navbar } from './Navbar';
export const Trekkersignup= () => {
        const [trekkerData, setTrekkerData] = useState({
          Tre_Uname: '',
          Tre_Name: '',
          Tre_Email: '',
          Tre_Mobile: '',
          Tre_Adhaar: '',
          Tre_Pass: '',
          Tre_Dob: '',
          Tre_Image: null,
        });
      
        const [imageFile, setImageFile] = useState(null);
        const [validationErrors, setValidationErrors] = useState({});
      
        const handleInputChange = (e) => {
          const { name, value } = e.target;
          setTrekkerData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
      
          // Additional frontend validations
          if (name === 'Tre_Adhaar' && !/^\d{12}$/.test(value)) {
            setValidationErrors((prevErrors) => ({
              ...prevErrors,
              [name]: 'Aadhaar must be 12 digits',
            }));
          } else if (name === 'Tre_Mobile' && !/^\d{10}$/.test(value)) {
            setValidationErrors((prevErrors) => ({
              ...prevErrors,
              [name]: 'Mobile must be 10 digits',
            }));
          } else if (name === 'Tre_Email' && !/^\S+@\S+\.\S+$/.test(value)) {
            setValidationErrors((prevErrors) => ({
              ...prevErrors,
              [name]: 'Invalid email format',
            }));
          } else if (name === 'Tre_Dob') {
            // Additional validation for age above 18
            const dob = new Date(value);
            const currentDate = new Date();
            const age = currentDate.getFullYear() - dob.getFullYear();
            if (age < 18) {
              setValidationErrors((prevErrors) => ({
                ...prevErrors,
                [name]: 'Trekker must be 18 or older',
              }));
            } else {
              setValidationErrors((prevErrors) => ({
                ...prevErrors,
                [name]: '',
              }));
            }
          } else if (name === 'Tre_Pass') {
            // Password strength validation
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
          setImageFile(file);
        };
      
        const handleSubmit = async (e) => {
          e.preventDefault();
      
          // Frontend validations for uniqueness
          // (Assuming you have a way to check the uniqueness on the frontend)
      
          // Validation check before submitting
          if (Object.values(validationErrors).every((error) => error === '')) {
            const formData = new FormData();
            formData.append('trekkerData', JSON.stringify(trekkerData));
            formData.append('trekkerImage', imageFile);
      
            // Sending data to the backend (example using fetch)
            try {
              const response = await fetch('http://localhost:9000/signup/trekker', {
                method: 'POST',
                body: formData,
              });
      
              if (response.ok) {
                console.log('Trekker signed up successfully!');
                // Reset the form or redirect to another page
              } else {
                console.error('Error in signing up trekker:', response.statusText);
              }
            } catch (error) {
              console.error('Error:', error.message);
            }
          } else {
            console.log('Validation errors. Cannot submit.');
          }
          return redirect("/");
        };
      
        return (
            <>
            <Navbar/>
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="Tre_Uname" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Tre_Uname"
                  name="Tre_Uname"
                  value={trekkerData.Tre_Uname}
                  onChange={handleInputChange}
                  required
                />
                {validationErrors.Tre_Uname && (
                  <div className="text-danger">{validationErrors.Tre_Uname}</div>
                )}
              </div>
      
              <div className="mb-3">
                <label htmlFor="Tre_Name" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Tre_Name"
                  name="Tre_Name"
                  value={trekkerData.Tre_Name}
                  onChange={handleInputChange}
                  required
                />
                {/* Add any additional validations for first name */}
              </div>
      
              <div className="mb-3">
                <label htmlFor="Tre_Name" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Tre_LastName"
                  name="Tre_LastName"
                  value={trekkerData.Tre_LastName}
                  onChange={handleInputChange}
                  required
                />
                {/* Add any additional validations for last name */}
              </div>
      
              <div className="mb-3">
                <label htmlFor="Tre_Email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="Tre_Email"
                  name="Tre_Email"
                  value={trekkerData.Tre_Email}
                  onChange={handleInputChange}
                  required
                />
                {validationErrors.Tre_Email && (
                  <div className="text-danger">{validationErrors.Tre_Email}</div>
                )}
              </div>
      
              <div className="mb-3">
                <label htmlFor="Tre_Mobile" className="form-label">
                  Mobile
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="Tre_Mobile"
                  name="Tre_Mobile"
                  value={trekkerData.Tre_Mobile}
                  onChange={handleInputChange}
                  required
                />
                {validationErrors.Tre_Mobile && (
                  <div className="text-danger">{validationErrors.Tre_Mobile}</div>
                )}
              </div>
      
              <div className="mb-3">
                <label htmlFor="Tre_Adhaar" className="form-label">
                  Aadhaar
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Tre_Adhaar"
                  name="Tre_Adhaar"
                  value={trekkerData.Tre_Adhaar}
                  onChange={handleInputChange}
                  required
                />
                {validationErrors.Tre_Adhaar && (
                  <div className="text-danger">{validationErrors.Tre_Adhaar}</div>
                )}
              </div>
      
              <div className="mb-3">
          <label htmlFor="Tre_Pass" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="Tre_Pass"
            name="Tre_Pass"
            value={trekkerData.Tre_Pass}
            onChange={handleInputChange}
            required
          />
          {validationErrors.Tre_Pass && (
            <div className="text-danger">{validationErrors.Tre_Pass}</div>
          )}
        </div>
      
              <div className="mb-3">
                <label htmlFor="Tre_Dob" className="form-label">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="Tre_Dob"
                  name="Tre_Dob"
                  value={trekkerData.Tre_Dob}
                  onChange={handleInputChange}
                  required
                />
                {validationErrors.Tre_Dob && (
                  <div className="text-danger">{validationErrors.Tre_Dob}</div>
                )}
              </div>
      
              <div className="mb-3">
                <label htmlFor="Tre_Image" className="form-label">
                  Trekker Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="Tre_Image"
                  name="Tre_Image"
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </div>
      
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </form>
          </div>
          </>
        );
      };