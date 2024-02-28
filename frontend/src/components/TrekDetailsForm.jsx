import React, { useState } from 'react';
import axios from 'axios';
export const TrekDetailsForm = () => {
  const [formData, setFormData] = useState({
    Td_Idname: 0, // Change the initial value to 0 or any default number
    Td_Trekname: '',
    Td_Loc: '',
    Td_Difficulty: '',
    Td_Duration: '',
    Td_PerPrice: '',
    imageUrl: '',
    description: '',
    overview: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9000/addTrek", formData)
      .then((data) => {
        console.log(data);
        alert("New Trek Details has Inserted !!! ");
      })
      .catch(err => {
        console.log(err);
        if (err.response && err.response.data && err.response.data.errno === 1062) {
          alert("Trek could not be inserted. Duplicate entry found!");
        } else {
          alert("Trek could not be inserted !!! ");
        }
      });

    setFormData({
      Td_Idname: 0, // Change back to 0 or any default number
      Td_Trekname: '',
      Td_Loc: '',
      Td_Difficulty: '',
      Td_Duration: '',
      Td_PerPrice: '',
      imageUrl: '',
      description: '',
      overview: '',
    });
  };

  return (
    <div className="container mt-4">
    <h2> Enter new Trek Details :</h2><br/>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="Td_Idname" className="form-label">
          Trek ID
        </label>
        <input
          type="number"  // Change to type="number"
          className="form-control"
          id="Td_Idname"
          name="Td_Idname"
          value={formData.Td_Idname}
          onChange={handleInputChange}
          required
          min="1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Td_Trekname" className="form-label">
          Trek Name
        </label>
        <input
          type="text"
          className="form-control"
          id="Td_Trekname"
          name="Td_Trekname"
          value={formData.Td_Trekname}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Td_Loc" className="form-label">
          Location
        </label>
        <input
          type="text"
          className="form-control"
          id="Td_Loc"
          name="Td_Loc"
          value={formData.Td_Loc}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Td_Difficulty" className="form-label">
          Difficulty
        </label>
        <input
          type="text"
          className="form-control"
          id="Td_Difficulty"
          name="Td_Difficulty"
          value={formData.Td_Difficulty}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Td_Duration" className="form-label">
          Duration
        </label>
        <input
          type="text"
          className="form-control"
          id="Td_Duration"
          name="Td_Duration"
          value={formData.Td_Duration}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Td_PerPrice" className="form-label">
          Per Price
        </label>
        <input
          type="text"
          className="form-control"
          id="Td_PerPrice"
          name="Td_PerPrice"
          value={formData.Td_PerPrice}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description ( 50-150 words )
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="overview" className="form-label">
            Overview ( 200+ words )
          </label>
          <textarea
            className="form-control"
            id="overview"
            name="overview"
            value={formData.overview}
            onChange={handleInputChange}
            required
          />
        </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    </div>
  );
};
