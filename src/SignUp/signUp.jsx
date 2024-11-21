import React, { Component } from 'react';
import './signUp.css';
import logo from '../components/images/joystick_4035533.png';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate here
import loader from '../assets/loader/loader.svg';
import Notifs from '../assets/notifs/Notifs';

class SignUp extends Component {
  API_URL = "http://localhost:5038";

  state = {
    username: '',
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
      confirmPassword: false,
    },
  };

  submit = async () => {
    const { username, email, password, confirmPassword } = this.state;
    const { navigate } = this.props;  // Access navigate prop

    // Check if all fields are filled
    let fieldError = {
      username: !username,
      email: !email,
      password: !password,
      confirmPassword: !confirmPassword,
    };

    // Check if passwords match
    if (password !== confirmPassword) {
      fieldError.password = true;
      fieldError.confirmPassword = true;
    }

    this.setState({ fieldError });

    // If any field is empty, stop the submission
    if (Object.values(fieldError).includes(true)) {
      this.setState({
        popupMessage: "All fields are required, and passwords must match.",
        popupType: "error",
        showPopup: true,
        uploading: false,
      });
      return;
    }

    this.setState({ uploading: true });

    try {
      const data = { username, email, password };
      const response = await fetch(`${this.API_URL}/api/gamehub/sign-up`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        this.setState({
          popupMessage: "Successfully Registered! Redirecting to the Login Page",
          popupType: "success",
          showPopup: true,
          uploading: false,
        });

        // Navigate to login page after successful registration
        setTimeout(() => navigate('/login'), 5000);  // Redirect after 2 seconds (or modify timing as needed)
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
            <form
              onSubmit={(e) => {
                e.preventDefault(); // Prevent default form submission
                this.submit();
              }}
            >
              <div className="form-group">
                <label htmlFor="name">Username</label>
                <input
                  className={`input-signup ${fieldError.username ? 'input-error' : ''}`}
                  type="text"
                  id="name"
                  placeholder="Enter a username"
                  value={this.state.username}
                  onChange={(e) => this.setState({ username: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  className={`input-signup ${fieldError.email ? 'input-error' : ''}`}
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  className={`input-signup ${fieldError.password ? 'input-error' : ''}`}
                  type="password"
                  id="password"
                  placeholder="Create a password"
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  className={`input-signup ${fieldError.confirmPassword ? 'input-error' : ''}`}
                  type="password"
                  id="confirm-password"
                  placeholder="Confirm your password"
                  value={this.state.confirmPassword}
                  onChange={(e) => this.setState({ confirmPassword: e.target.value })}
                />
              </div>
              <h5>
                Already have an account? <Link to="/login" className="links">Login Now!</Link>
              </h5>
              <button
                type="submit"
                className="signup-button"
                disabled={uploading}
              >
                {uploading ? "Signing Up..." : "Sign Up"}
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
function SignUpWithNavigate(props) {
  const navigate = useNavigate();
  return <SignUp {...props} navigate={navigate} />;
}

export default SignUpWithNavigate;
