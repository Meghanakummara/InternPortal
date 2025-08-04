import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/api/user')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container">
      <h2>Welcome, {data.name}</h2>
      <p><strong>Referral Code:</strong> {data.referralCode}</p>
      <p><strong>Total Donations Raised:</strong> ₹{data.totalDonations}</p>

      <h3>Rewards</h3>
      <ul>
        <li>Raise ₹1000 - Unlock Badge</li>
        <li>Raise ₹5000 - Get Certificate</li>
        <li>Raise ₹10000 - Premium Goodies</li>
      </ul>

      <Link to="/leaderboard">View Leaderboard</Link>
    </div>
  );
}

export default Dashboard;


