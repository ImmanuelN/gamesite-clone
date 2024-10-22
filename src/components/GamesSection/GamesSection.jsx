import React from 'react';
import './GamesSection.css';
import windows from '../images/Game Pictures/windows.png'

const GamesSection = ({games}) => {
  return (
    <div className='section-main'>
      {games.map(game=>
        <div className='game-card' key={game._id}>
          <img src= {game.gamePic} alt='game-picture' className='game-pic'/>
          <div className='card-info'>
            <img src={game.devpic} alt='devPic0' className='dev-pic'/>
            <div>
              <div className='developer'>
                  {game.devName}
              </div>
              <div className='Game'>
                {game.name}
              </div>
            </div>
          </div>
          <img src={windows} alt='OS' className='os-pic'></img>
        </div>
      )}
    </div>
  )
}

export default GamesSection