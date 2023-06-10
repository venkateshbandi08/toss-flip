// Write your code here
import {Component} from 'react'
import './index.css'

const headsImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossImage: headsImage,
    headsCount: 0,
    tailsCount: 0,
    totalCount: 0,
  }

  onClickTossFlip = () => {
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    if (tossResult === 0) {
      this.setState(prevState => ({
        tossImage: headsImage,
        headsCount: prevState.headsCount + 1,
        totalCount: prevState.totalCount + 1,
      }))
    } else {
      this.setState(prevState => ({
        tossImage: tailsImage,
        tailsCount: prevState.tailsCount + 1,
        totalCount: prevState.totalCount + 1,
      }))
    }
  }

  render() {
    const {tossImage, headsCount, tailsCount, totalCount} = this.state
    return (
      <div className="bg-container">
        <div className="toss-content-container">
          <h1 className="toss-game-heading"> Coin Toss Game </h1>
          <p className="head-tail-description"> Heads (or) Tails </p>
          <img src={tossImage} className="toss-image" alt="toss result" />
          <button
            className="toss-flip-button"
            type="button"
            onClick={this.onClickTossFlip}
          >
            Toss Coin
          </button>
          <div className="total-heads-tails-count-container">
            <p className="count-item"> Total: {totalCount}</p>
            <p className="count-item"> Heads: {headsCount}</p>
            <p className="count-item"> Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
