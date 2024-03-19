import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiUserLine, RiLockPasswordLine } from 'react-icons/ri'; // Importing icons
import "../../../assets/css/login.css";

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple validation
    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password');
      return;
    }
    // Here you can implement your authentication logic
    // For demonstration purpose, just logging the credentials
    console.log('Username:', username);
    console.log('Password:', password);
    // Clearing fields
    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    <>
    <div className="page-container">
      <div className='c1'>
        <div className="container" >
        <h1>LOGIN</h1>
      
        <div className="form-container">
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleLogin} className="login-form">
          <h2>Login</h2>
          <div className="form-group">
            <div className="input-icon">
              <RiUserLine className="icon" />
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input-field"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-icon">
              <RiLockPasswordLine className="icon" />
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
              />
            </div>
          </div>
          <NavLink to="/admin/dashboard">
          <button type="submit" className="submit-button1">
            Login
          </button>
          </NavLink>
         
        </form>
      </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default AdminLogin;