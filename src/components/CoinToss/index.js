import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {tossResult: 0, totalCount: 0, headsCount: 0, tailsCount: 0}

  TossChanged = () => {
    const {tossResult, totalCount, headsCount, tailsCount} = this.state
    const TossResult = Math.floor(Math.random() * 2)
    if (TossResult === 0) {
      this.setState({
        tossResult: TossResult,
        totalCount: totalCount + 1,
        headsCount: headsCount + 1,
      })
    } else {
      this.setState({
        tossResult: TossResult,
        totalCount: totalCount + 1,
        tailsCount: tailsCount + 1,
      })
    }
  }

  render() {
    let tossImage
    const {tossResult, totalCount, headsCount, tailsCount} = this.state

    if (tossResult === 0) {
      tossImage = (
        <img
          src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
          className="image"
          alt="toss result"
        />
      )
    } else {
      tossImage = (
        <img
          src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
          className="image"
          alt="toss result"
        />
      )
    }

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para1">Heads (or) Tails</p>
          {tossImage}
          <button className="toss-btn" type="button" onClick={this.TossChanged}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="para2">Total: {totalCount}</p>
            <p className="para2">Heads: {headsCount}</p>
            <p className="para2">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
