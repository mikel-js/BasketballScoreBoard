import React from 'react';
import './Player.css';

const Players = ({ team, name, point, incrementPts, decrementPts }) => {

  return (
    <div className={team === 'lakers' ? 'players-score-lakers' : 'players-score-celtics'}>
      {name} :
      <i className='fas fa-arrow-up' onClick={incrementPts}></i>
      {point}
      <i className='fas fa-arrow-down' onClick={decrementPts}></i>
    </div>
  )
}
export default Players
