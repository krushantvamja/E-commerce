import React from 'react'
import './CSS/loginsignup.css';

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1> Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="enter your name" />
          <input type="email" placeholder="email adress" />
          <input type="password" placeholder='password' />
        </div>
        <button >Continue</button>
        <p className="loginsignup-login">Already have an account</p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing i agree to  terms and privacy policy </p>
        </div>
        </div>
      </div>
      )
}

      export default LoginSignup