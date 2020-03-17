import React from 'react';
import './Player.css';

const Players = ({ name, point, upPoints, downPoints }) => {

  return (
    <div>
      {name} :
      <i className='fas fa-arrow-up' onClick={upPoints}></i>
      {point}
      <i className='fas fa-arrow-down' onClick={downPoints}></i>
    </div>
  )
}
export default Players
