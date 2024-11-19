import React, { Component } from 'react';
import './signUp.css';
import logo from '../components/images/joystick_4035533.png';
import { Link } from 'react-router-dom';

class signUp extends Component {
  render() {
    return (
      <div className="signup-container">
        <div className="signup-box">
          <div className="signup-left">
          <h3>Welcome to</h3>
            <h2>
              <img src={logo} alt="GameHub Logo" className="logo" />
              GAMEHUB
            </h2>
            
            <p>Join our community and start exploring, sharing, and uploading games today. Let's build the ultimate gaming hub together!</p>
          </div>
          <div className="signup-right">
            <h2>SIGN UP</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Username</label>
                <input className="input-signup" type="text" id="name" placeholder="Enter a username" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input className="input-signup" type="email" id="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input className="input-signup" type="password" id="password" placeholder="Create a password" />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input className="input-signup" type="password" id="confirm-password" placeholder="Confirm your password" />
              </div>
              <h5>Already have an account? <Link to='/login' className='links'>Login Now!</Link></h5>
              <button type="submit" className="signup-button">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default signUp;
