import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
     axios.get('https://internportal-backend-mwqy.onrender.com/api/user')
      .then(res => setLeaders(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container">
      <h2>Leaderboard</h2>
      <ul>
        {leaders.map((item, index) => (
          <li key={index}>{item.name}: ₹{item.donations}</li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;

