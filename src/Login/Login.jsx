import React, { Component } from 'react';
import './Login.css';
import logo from '../components/images/joystick_4035533.png';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <div className="login-box">
          <div className="login-left">
          <h3>Welcome to</h3>
            <h2>
              <img src={logo} alt="GameHub Logo" className="logo" />
              GAMEHUB
            </h2>
            <p>Discover, upload and share your games with the world. Join our vibrant community of gamers!</p>
          </div>
          <div className="login-right">
            <h2>LOGIN</h2>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input className="input-login" type="email" id="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input className="input-login" type="password" id="password" placeholder="Enter your password" />
              </div>
              <h5>Don't have an account yet? <Link to='/sign-up' className='links'>Sign Up Now!</Link></h5>
              <button type="submit" className="login-button">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
