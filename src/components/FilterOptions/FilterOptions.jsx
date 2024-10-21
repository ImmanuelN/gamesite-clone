import React from 'react';
import './FilterOptions.css';
import arrow_down from '../images/arrow-down-01-stroke-rounded.svg';


const FilterOptions = () => {
  return (
    <div className='main'>
      <div className='top-bar'>
        <button className='filter-button-top-empty'>
           
        </button>
        <button className='filter-button-top'>
          Featured  
        </button>
        
        <button className='filter-button-top'>
          Hot
        </button> 
        <button className='filter-button-top'>
          Best  
        </button>
        <button className='filter-button-top'>
          New  
        </button>  
      </div>
      <div className='low-bar'>
        <button className='filter-button-low'>
          Price  <img src= {arrow_down} alt='down-arrow' className='down_arrow'></img>
        </button>
        <button className='filter-button-low'>
          OS  <img src={arrow_down} alt='down-arrow'className='down_arrow'></img>
        </button>
        <button className='filter-button-low'>
          Browser <img src={arrow_down} alt='down-arrow'className='down_arrow'></img>
        </button>
        <button className='filter-button-low'>
          Maturity <img src={arrow_down} alt='down-arrow'className='down_arrow'></img>
        </button>
        <button className='filter-button-low'>
          Status <img src={arrow_down} alt='down-arrow'className='down_arrow'></img>
        </button>
        <button className='filter-button-low'>
          Partners <img src={arrow_down} alt='down-arrow'className='down_arrow'></img>
        </button>
      </div>
    </div>
  )
}

export default FilterOptions