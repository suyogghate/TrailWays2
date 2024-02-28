import React, { useState,useEffect } from 'react';
import axios from 'axios';
export const SlotForm = () => {
  const [formData, setFormData] = useState({
    S_RandomSlot: '',
    S_Slotdate: '',
    S_Tdidname: '',
  });
  const [TrekData,setTrekData] =useState([]);
  useEffect(() => {
    // Fetch trek details from the backend and set it in the state
    axios.get("http://localhost:9000/trekidname")
      .then((res) => setTrekData(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    axios.post("http://localhost:9000/slotinsert", formData)
      .then((data) => {
        console.log(data);
        alert("New Slot has Inserted !!! ");
      })
      .catch(err => {
        console.log(err);
        if (err.response && err.response.data && err.response.data.errno === 1062) {
          alert("Slot could not be inserted. Duplicate entry found!");
        } else {
          alert("Slot could not be inserted !!! ");
        }
      });

    // Reset the form after submission
    setFormData({
      S_RandomSlot: '',
      S_Slotdate: '',
      S_Tdidname: '',
    });
  };

  return (
    <div className="container mt-4">
      <h2> Enter new Slot :</h2><br/>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="S_RandomSlot" className="form-label">
            Random Slot
          </label>
          <input
            type="text"
            className="form-control"
            id="S_RandomSlot"
            name="S_RandomSlot"
            value={formData.S_RandomSlot}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="S_Slotdate" className="form-label">
            Slot Date
          </label>
          <input
            type="date"
            className="form-control"
            id="S_Slotdate"
            name="S_Slotdate"
            value={formData.S_Slotdate}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="S_Tdidname" className="form-label">
            Trek Name
          </label>
          <select
            className="form-control"
            id="S_Tdidname"
            name="S_Tdidname"
            value={formData.S_Tdidname}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>Select Trek</option>
            {TrekData.map(trek => (
              <option key={trek.Td_Idname} value={trek.Td_Idname}>
                {trek.Td_Trekname}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>

      </form>
    </div>
  );
};

