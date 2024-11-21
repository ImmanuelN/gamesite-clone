import React, {useEffect, useState} from 'react';
import './NavBar.css';
import logo from '../images/joystick_4035533.png';
import menu_icon from '../images/menu-01-stroke-rounded.svg';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext'; // Import useAuth

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user, logout } = useAuth(); // Destructure from the context
  useEffect(()=>{
    const token = localStorage.getItem('gamehubUserToken');
    if (token){
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);



  return (
    <div className='navbar-background'>
      <div className='navbar-inside'>
        {/* Left side of the navbar */}
        <div className='left-side'>
          <Link to='/' className='link-no-style'>
            <button className='nav-buttons-logo'>
              <div className='box'>
                <img src={logo} alt='GameHub Logo' className='logo' />
                GAMEHUB
              </div>
            </button>
          </Link>
          
          <button className='nav-buttons'>
            Store
          </button>
          
          {/* Mobile Menu Button */}
          <button className='nav-buttons'>
            <img src={menu_icon} alt='menu icon' className='logo' />
          </button>
        </div>

        {/* Search bar in the middle */}
        <div className='middle'>
          <input 
            className='SearchBar' 
            type='text' 
            placeholder='Search...' // Dynamically update placeholder
          />
        </div>

        {/* Right side of the navbar (user authentication buttons) */}
        <div className='right-side'>
        {isLoggedIn ? (
            <button className='nav-buttons' onClick={() => {logout(); setIsLoggedIn(false); }}>
              Logout
            </button>
          ) : (
            <>
              <Link to='/login'>
                <button className='nav-buttons'>
                  Login
                </button>
              </Link>
              <Link to='/sign-up'>
                <button className='nav-buttons'>
                  SignUp
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;