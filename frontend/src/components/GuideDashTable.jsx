// GuideDashTable.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../Hooks/AuthContext';

const GuideDashTable = () => {
  const [previousDetails, setPreviousDetails] = useState(null);
  const [upcomingDetails, setUpcomingDetails] = useState(null);
  const { state } = useAuth();
  const { user } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch previous activity_pastdetails
        const prevResponse = await axios.get('http://localhost:9000/guideprevious');
        const guidePrev = prevResponse.data.filter((guide) => guide.A_Guideuname === user.username);
        setPreviousDetails(guidePrev);

        // Fetch upcoming activity_pastdetails
        const upcomingResponse = await axios.get('http://localhost:9000/guideupcoming');
        const guideUpcoming = upcomingResponse.data.filter((guide) => guide.A_Guideuname === user.username);
        setUpcomingDetails(guideUpcoming);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error gracefully, for example:
        setPreviousDetails([]);
        setUpcomingDetails([]);
      }
    };

    fetchData();
  }, [user.username]);

  const renderTableBody = (details) => (
    details.map((detail, index) => (
      <tr key={detail.A_Randomid}>
        <td>{index + 1}</td>
        <td>{new Date(detail.A_Date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</td>
        <td>{detail.A_Totalpeople}</td>
        <td>{detail.Td_Trekname}</td>
        <td>{detail.Tre_name}</td>
        <td>{detail.B_TotalAmount}</td>
      </tr>
    ))
  );

  return (
    <div className="container mt-4">

      <h3 className="my-4">Upcoming Activity Details</h3>
      <table className="table table-bordered table-hover ">
        <thead>
          <tr>
            <th>Trek No.</th>
            <th>Date</th>
            <th>Total People</th>
            <th>Trek Name</th>
            <th>Trekker Name</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {upcomingDetails && renderTableBody(upcomingDetails)}
        </tbody>
      </table>

      <h3 className="my-4">Previous Activity Details</h3>
      <table className="table table-bordered table-hover ">
        <thead>
          <tr>
            <th>Trek No.</th>
            <th>Date</th>
            <th>Total People</th>
            <th>Trek Name</th>
            <th>Trekker Name</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {previousDetails && renderTableBody(previousDetails)}
        </tbody>
      </table>

    </div>
  );
};

export default GuideDashTable;