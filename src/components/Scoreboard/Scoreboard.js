import React, { Component } from 'react';
import Score from '../Score/Score';
import Players from '../Players/Players';
import './ScoreBoard.css';

export default class Scoreboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lakers: [
        { name: 'Kobe', point: 24 },
        { name: 'Lebron', point: 23 },
        { name: 'Davis', point: 7 },
        { name: 'Shaq', point: 34 },
        { name: 'Castro', point: 17 },
      ],
      celtics: [
        { name: 'Bird', point: 23 },
        { name: 'Tatum', point: 9 },
        { name: 'McHale', point: 10 },
        { name: 'Garnett', point: 14 },
        { name: 'Pierce', point: 27 },
      ],
      sortLakers: false,
      sortCeltics: false
    }
    this.handlePointChange = this.handlePointChange.bind(this)
    this.handleSort = this.handleSort.bind(this)
  }

  handlePointChange(team, name, points) {
    team === 'lakers' ?
      this.setState((prevState) => ({
        lakers: prevState.lakers.map(laker =>
          laker.name === name ? { ...laker, point: laker.point + points } : laker
        )
      })) :
      this.setState((prevState) => ({
        celtics: prevState.celtics.map(celtic =>
          celtic.name === name ? { ...celtic, point: celtic.point + points } : celtic
        )
      }))
  }

  handleSort(team) {
    if (team === 'lakers') {
      let lakers = this.state.lakers.sort((a, b) => {
        if (this.state.sortLakers === false) {
          return a.point > b.point ? 1 : -1
        } else {
          return a.point < b.point ? 1 : -1
        }
      })
      this.setState(prevState => ({
        lakers,
        sortLakers: !prevState.sortLakers
      }))
    }
    else {
      let celtics = this.state.celtics.sort((a, b) => {
        if (this.state.sortCeltics === false) {
          return a.point > b.point ? 1 : -1
        } else {
          return a.point < b.point ? 1 : -1
        }
      })
      this.setState(prevState => ({
        celtics,
        sortCeltics: !prevState.sortCeltics
      }))
    }
  }

  render() {
    let lakers = this.state.lakers.map(laker =>
      <Players
        team='lakers'
        name={laker.name}
        point={laker.point}
        incrementPts={() => this.handlePointChange('lakers', laker.name, 1)}
        decrementPts={() => laker.point > 0 && this.handlePointChange('lakers', laker.name, -1)}
      />
    )
    let celtics = this.state.celtics.map(celtic =>
      <Players
        name={celtic.name}
        point={celtic.point}
        incrementPts={() => this.handlePointChange('celtics', celtic.name, 1)}
        decrementPts={() => celtic.point > 0 && this.handlePointChange('celtics', celtic.name, -1)}
      />
    )
    return (
      <div className='scoreboard-container'>
        <div className='scoreboard-team lakers'>
          <Score team={this.state.lakers} name='Lakers' /><button onClick={() => this.handleSort('lakers')} className='scoreboard-button-lakers'>Sort</button>
          {lakers}
        </div>
        <div className='scoreboard-team celtics'>
          <Score team={this.state.celtics} name='Celtics' />
          <button onClick={() => this.handleSort('celtics')} className='scoreboard-button-celtics'>Sort</button>
          {celtics}
        </div>
      </div>
    )
  }
}
