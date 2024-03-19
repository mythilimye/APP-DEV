/*import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userLogin, getUserbyId } from '../../service/api';
import img from "../../assets/signupimg.jfif.jpg"
import { Navbar } from '../../components/Navbar';
import { Footer } from './../../components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import LoginSVG from '../../assets/ico/login.webp';
import { v4 as xuidkey } from 'uuid';
import CryptoJS from 'crypto-js';

export default function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('Token'));
    const navigate = useNavigate();
    const [signin, setSignin] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setSignin({ ...signin, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await userLogin(signin);

        if ((res.status) == "200" && (res.data.role)== "CUSTOMER")  {
            console.log(res.data);
            

            localStorage.setItem('Token', res.data.token);
            localStorage.setItem('Role', res.data.role);
   

            const getuid = (res.data.uid);
            console.log(getuid)
            localStorage.setItem('xuserName', res.data.name);
            localStorage.setItem('xuserEmail', res.data.email);
            localStorage.setItem('xuserId', res.data.uid);
            localStorage.setItem('xuserPhone', res.data.phone);
            localStorage.setItem('xuserAddress', res.data.address);

            toast.success(` Welcome ${res.data.name} !`, {
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
                navigate('/user/dashboard');
            }, 1500);

        }
        
        else if((res.status) == "200" && (res.data.role)== "ADMIN"){
            console.log(res.data);

            localStorage.setItem('Token', res.data.token);
            localStorage.setItem('Role', res.data.role);
            localStorage.setItem('AdminEmail', res.data.email);

            toast.success(` Welcome ${res.data.name} !`, {
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
                navigate('/admin/dashboard');
            }, 1500);
        }
        
        else {
            toast.error(` Invalid Email | Password !`, {
                position: "bottom-right",
                autoClose: 1000,
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
                <div className='auth-container'>
                    <div className='auth-wrapper'>
                        <form className='auth-form app-x-shadow' onSubmit={handleSubmit}>
                             <img src={LoginSVG} alt="login-img" className='auth-svg' /> 
                            <h1 className='auth-heading'>Login</h1>
                            <input type="email" name="email" id="email" onChange={handleChange} placeholder='Email' className='auth-field' required />
                            <input type="password" name="password" id="password" onChange={handleChange} placeholder='Password' className='auth-field' required />

                            <button type='submit' className='auth-btn app-x-shadow'> Login </button>
                        </form>
                            
                            <Link to='/register' className='auth-links'>Sign up</Link>
                       
                    </div>
                    <div>
                        <img className='fa' src={img}/>
                    </div>
                </div>
                <div className='new'>
                <h4 className='new'>New User </h4>
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
import { RiUserLine, RiLockPasswordLine } from 'react-icons/ri'; // Importing icons
import "../../assets/css/login.css";

const Login = () => {
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
          <NavLink to="/">
          <button type="submit" className="submit-button1">
            Login
          </button>
          </NavLink>
          <p>
            Don't have an account?<NavLink to="/register">Register</NavLink>
          </p>
        </form>
      </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Login;