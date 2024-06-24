import React from 'react';
import './login.css';

import Email_icon from '../Assests/images/Email.png'
import user_icon from '../Assests/images/Password.png'
import password_icon from '../Assests/images/Person1.png'
import { useState } from 'react';

const LoginSignup = () => {

 const [action , setAction] = useState('Login')
  return (
    <div className='Container'>
        <div className='Container-all'>
      <div className="header">
        <div className="title">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? <div></div>:<div className="input">
          <img src={user_icon} className='img' alt="userName" />
          <input type="text" placeholder="Username" />
        </div> }
        
        <div className="input">
          <img src={Email_icon} className='img' alt="Email" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={password_icon} className='img' alt="Password" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="submit-container">
        {action === "Sign Up" ? <div></div> : <div className="forget-password">Forget Password ?</div>}
       
        <div className="submit-btn">
        <button className={action === 'Login'? "submit gray" : "submit"} onClick={() => setAction('Sign Up')}>sign Up</button>
        <button className={action === 'Sign Up' ? "submit gray" :"submit"} onClick={() => {setAction('Login')}}>Login</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default LoginSignup;
