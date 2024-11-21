import React, { Component } from 'react';
import './Login.css';
import logo from '../components/images/joystick_4035533.png';
import { Link, useNavigate } from 'react-router-dom';
import Notifs from '../assets/notifs/Notifs';
import loader from '../assets/loader/loader.svg';
import { useAuth } from '../Context/AuthContext';

class Login extends Component {
  API_URL = "http://localhost:5038";

  state = {
    email: '',
    password: '',
    confirmPassword: '',
    popupMessage: '',
    popupType: '',
    showPopup: false,
    uploading: false, // to control loading state
    fieldError: {
      username: false,
      email: false,
      password: false,
    },
  };
  
  submit = async () => {
    const { email, password} = this.state;
    const { navigate } = this.props;  // Access navigate prop

    // Check if all fields are filled
    let fieldError = {
      email: !email,
      password: !password,
    };

    this.setState({ fieldError });

    // If any field is empty, stop the submission
    if (Object.values(fieldError).includes(true)) {
      this.setState({
        popupMessage: "All fields are required.",
        popupType: "error",
        showPopup: true,
        uploading: false,
      });
      return;
    }

    this.setState({ uploading: true });

    try {
      const data = { email, password };
      const response = await fetch(`${this.API_URL}/api/gamehub/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        localStorage.setItem("gamehubUserToken", result.token);
        
        this.setState({
          popupMessage: "Successfully Logged In!",
          popupType: "success",
          showPopup: true,
          uploading: false,
        });

        // Navigate to login page after successful login
        setTimeout(() => navigate('/'), 5000);  // Redirect after 2 seconds (or modify timing as needed)
      } else {
        this.setState({
          popupMessage: result || "An error occurred during registration",
          popupType: "error",
          showPopup: true,
          uploading: false,
        });
      }
    } catch (error) {
      this.setState({
        popupMessage: "An error occurred while registering",
        popupType: "error",
        showPopup: true,
        uploading: false,
      });
    }
  };

  handleClosePopup = () => {
    this.setState({ showPopup: false });
  };

  render() {
    const { uploading, showPopup, popupMessage, popupType, fieldError } = this.state;

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
            <form
              onSubmit={(e) => {
                e.preventDefault(); // Prevent default form submission
                this.submit();
              }}
            >
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  className={`input-login ${fieldError.email ? 'input-error' : ''}`}
                  type="email" id="email" 
                  placeholder="Enter your email" 
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                  />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                  className={`input-login ${fieldError.password ? 'input-error' : ''}`}
                  type="password" 
                  id="password" 
                  placeholder="Enter your password" 
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                  />
              </div>
              <h5>Don't have an account yet? <Link to='/sign-up' className='links'>Sign Up Now!</Link></h5>
              <button 
                type="submit" 
                className="login-button"
                disabled={uploading}
                >
                  {uploading ? "Logging In..." : "Login"}
                </button>

                {uploading && (
                <div className="loader-overlay">
                  <img src={loader} alt="Loading..." style={{ width: '30px', height: '30px' }} />
                </div>
              )}
            </form>
          </div>
        </div>
        {showPopup && (
          <Notifs
            message={popupMessage}
            type={popupType}
            onClose={this.handleClosePopup}
          />
        )}
      </div>
    );
  }
}

// Wrap your component in a function and use the `useNavigate` hook
function LoginWithNavigate(props) {
  const navigate = useNavigate();
  return <Login {...props} navigate={navigate} />;
}

// Use AuthContext's login function by passing it as a prop
function LoginWithAuth(props) {
  const { login } = useAuth();
  return <LoginWithNavigate {...props} auth={{ login }} />;
}

export default LoginWithAuth;