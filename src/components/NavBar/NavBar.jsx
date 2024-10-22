import React from 'react';
import "./NavBar.css";
import logo from '../images/joystick_4035533.png';
import menu_icon from '../images/menu-01-stroke-rounded.svg';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className='navbar-background'>
      <div className='navbar-inside'>
        <div className='left-side'>
          <div>
            <button className='nav-buttons-logo'>
              <Link to='/' className='link-no-style'>
              <div className='box'>
                  <img src ={logo} alt='GameHub Logo' className='logo'/>
                  GAMEHUB
                
              </div>
              </Link>
            </button>
          </div>
          <div>
            <button className='nav-buttons'>
              Store
            </button>
          </div>
          <div>
            <button className='nav-buttons'>
              <img src= {menu_icon}  alt="menu logo" className='logo'/>
            </button>
          </div>
        </div>

        <div className='middle'>
            <input
              className='SearchBar'
              type='text'
              value='Search'
            />
        </div>

        <div className='right-side'>
          <div>
            <button className='nav-buttons'>
              Login
            </button>
          </div>
          <div>
            <button className='nav-buttons'>
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar