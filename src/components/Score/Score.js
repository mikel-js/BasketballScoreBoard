import React from 'react';

const Score =({team, name}) => {
  
  const totalScore = team.reduce((total, player)=> {
    return total + player.point
  }, 1);

  return(
    <div>
      <h1>{name}</h1>
      <h2>{totalScore}</h2>
    </div>
  )
}
export default Score

