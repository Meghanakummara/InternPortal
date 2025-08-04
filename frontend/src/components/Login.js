import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <h2>Intern Login</h2>
      <input type="text" placeholder="Enter name" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
