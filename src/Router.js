// YourComponent.js (the component with the button)
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Router = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/Add_Game'); // Navigates to Add_Game component route
  };

  return (
    <div>
      <button className="add-button" onClick={handleButtonClick}>
        Add Your Game
      </button>
    </div>
  );
};

export default Router;