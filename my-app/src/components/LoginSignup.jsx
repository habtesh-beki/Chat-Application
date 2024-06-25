import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Email_icon from '../Assests/images/Email.png'
import user_icon from '../Assests/images/Person1.png'
import password_icon from '../Assests/images/Password.png'


const LoginSignup = () => {
  const [userName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [action, setAction] = useState('Login');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:3000/api/users/signup', { userName, email, password, confirmPassword })
      .then(() => {
        console.log('The front end is connected:');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='Container'>
      <div className='Container-all'>
        <div className="header">
          <div className="title">{action}</div>
          <div className="underline"></div>
        </div>
        <form className="inputs" onSubmit={handleSubmit}>
          {action === "Login" ? null : (
            <div className="input">
              <img src={user_icon} className='img' alt="userName" />
              <input type="text" placeholder="Username" onChange={(e) => setName(e.target.value)} />
            </div>
          )}
          
          <div className="input">
            <img src={Email_icon} className='img' alt="Email" />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input">
            <img src={password_icon} className='img' alt="Password" />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="input">
            <img src={password_icon} className='img' alt="confirmPassword" />
            <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <div className="submit-container">
            {action === "Sign Up" ? null : <div className="forget-password">Forget Password?</div>}
            <div className="submit-btn">
              <button type="submit" className={action === 'Login' ? "submit gray" : "submit"} onClick={() => setAction('Sign Up')}>Sign Up</button>
              <button type="button" className={action === 'Sign Up' ? "submit gray" : "submit"} onClick={() => setAction('Login')}>Login</button>
            </div>
          </div>
        </form>
      </div> 
    </div>
  );
}

export default LoginSignup;


