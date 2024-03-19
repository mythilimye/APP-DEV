/*import React from 'react'
import { useState } from 'react';
import img from "../../assets/signupimg.jfif.jpg";
import { Link, useNavigate } from 'react-router-dom'
import { userRegister } from '../../service/api';
import { Navbar } from '../../components/Navbar';
import { Footer } from './../../components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import RegisterSVG from '../../assets/ico/register.webp';



export default function Register() {
    const navigate = useNavigate();
    const [signup, setSignup] = useState({
        name: '',
        phone: 0,
        email: '',
        password: '',
        address:'',
        role:'customer'
    });

    const handleChange = (e) => {
        setSignup({ ...signup, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await userRegister(signup);
        if (res.data === "User registered successfully" && res.status==200) {
            toast.success(` Signup Successfull !`, {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                navigate('/login');
            }, 1500);

        } 
        // else if (res.data === "Email Already Exists") {
        //     toast.error(`Email Already Exists !`, {
        //         position: "bottom-right",
        //         autoClose: 4000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "light",
        //     });
        // }
         else if (res.data==="Sommething went wrong!" && res.status==="400") {
            toast.error(`Sommething went wrong!`, {
                position: "bottom-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };


    return (
        <>
            <div className='main'>
                <Navbar />
                <div className='auth-container1'>
                    <div className='auth-wrapper1'>
                        <form className='auth-form-1 app-x-shadow' onSubmit={handleSubmit}>
                             <img src={RegisterSVG} alt="login-img" className='auth-svg'/> 
                            <h1 className='auth-heading1'>Register</h1>
                            <input type="text" name="name" id="name" onChange={handleChange} placeholder='Name' className='auth-field' required />
                            <input type="email" name="email" id="email" onChange={handleChange} placeholder='Email' className='auth-field' required />
                            <input type="number" name="phone" id="phone" onChange={handleChange} placeholder='Phone' className='auth-field' required />
                            <input type="password" name="password" id="password" onChange={handleChange} placeholder='Password' className='auth-field' required />
                            <textarea name="address" id="address" cols="45" rows="5" placeholder='Address' onChange={handleChange} className='auth-field' required/>
                            <button type='submit' className='auth-btn app-x-shadow'> Register </button>
                        </form>
                        <Link to='/login' className='auth-links1'>Login</Link>
                    </div>
                    <div>
                        <img className='fa1' src={img}/>
                    </div>
                </div>
                <Footer />
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}*/
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiUserLine, RiLockPasswordLine, RiMailLine } from 'react-icons/ri'; // Importing icons

import "../../assets/css/login.css";
const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Simple validation
    if (!username.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // Here you can implement your sign-up logic
    // For demonstration purpose, just logging the user info
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    // Clearing fields
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  return (
    <div className="page-container">
      <div className='c1'>
        <div className="container">
      <div className="form-container">
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSignUp} className="signup-form">
        <div className="form-group">
          <h2>Sign Up</h2>
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
            <RiMailLine className="icon" />
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
        <div className="form-group">
          <div className="input-icon">
            <RiLockPasswordLine className="icon" />
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input-field"
            />
          </div>
        </div>
        <NavLink to="/login" className="link">Login</NavLink>
        <NavLink to="/login">
        <button type="submit" className="submit-button">Sign Up</button>
        </NavLink>
      </form>
      </div>
    </div>
    </div>
    </div>
  );
};

export default SignUp;