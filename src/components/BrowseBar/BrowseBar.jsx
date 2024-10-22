import React from 'react';
import './BrowseBar.css';

import {
  actionIcon,
  horrorIcon, 
  adventureIcon, 
  fangamesIcon, 
  rpgIcon, 
  multiplayerIcon, 
  singleplayerIcon, 
  retroIcon, 
  otherIcon, 
  vrIcon, 
  sportIcon, 
  arcadeIcon, 
  survivalIcon
} from '../images/index.js';
import { Link } from 'react-router-dom';

const BrowseBar = () => {

  return (
    <div className='browse-bar-main'>
      <div className='browse-bar-top'>
        <h4>GameHub's Store is an open platform to share your games with the world.</h4>
        <Link to='/add-game'>
          <button className='add-button'>Add Your Game</button>
        </Link>
      </div>
      <div className='browsbar-scroller-main'>
        <div className='Title'>
          <h3>Browse Games</h3>
        </div>
        <div className='sliding-cards'>
          <div className='card'>
            <img src={actionIcon} alt="icon" className='cardlogo'/>
            <h6>ACTION</h6>
          </div>
          <div className='card'>
            <img src={horrorIcon} alt="icon" className='cardlogo'/>
            <h6>HORROR</h6>
          </div>
          <div className='card'>
            <img src={adventureIcon} alt="icon" className='cardlogo'/>
            <h6>ADVENTURE</h6>
          </div>
          <div className='card'>
            <img src={fangamesIcon} alt="icon" className='cardlogo'/>
            <h6>FANGAMES</h6>
          </div>
          <div className='card'>
            <img src={rpgIcon} alt="icon" className='cardlogo'/>
            <h6>RPG</h6>
          </div>
          <div className='card'>
            <img src={multiplayerIcon} alt="icon" className='cardlogo'/>
            <h6>MULTIPLAYER</h6>
          </div>
          <div className='card'>
            <img src={singleplayerIcon} alt="icon" className='cardlogo'/>
            <h6>SINGLEPLAYER</h6>
          </div>
          <div className='card'>
            <img src={retroIcon} alt="icon" className='cardlogo'/>
            <h6>RETRO</h6>
          </div>
          <div className='card'>
            <img src={otherIcon} alt="icon" className='cardlogo'/>
            <h6>OTHER</h6>
          </div>
          <div className='card'>
            <img src={survivalIcon} alt="icon" className='cardlogo'/>
            <h6>SURVIVAL</h6>
          </div>
          <div className='card'>
            <img src={arcadeIcon} alt="icon" className='cardlogo'/>
            <h6>ARCADE</h6>
          </div>
          <div className='card'>
            <img src={sportIcon} alt="icon" className='cardlogo'/>
            <h6>SPORT</h6>
          </div>
          <div className='card'>
            <img src={vrIcon} alt="icon" className='cardlogo'/>
            <h6>VR</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrowseBar