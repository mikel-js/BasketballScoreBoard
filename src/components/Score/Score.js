import React from 'react';
import './Score.css'

const Score =({team, name}) => {
  
  const totalScore = team.reduce((total, player)=> {
    return total + player.point
  }, 1);

  return(
    <div>
      <h1 className={name === 'Lakers' ? 'lakers' : 'celtics'}>{name}</h1>
      <h2>{totalScore}</h2>
    </div>
  )
}
export default Score

