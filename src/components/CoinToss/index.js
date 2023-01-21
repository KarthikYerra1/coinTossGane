import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    count: 0,
    heads: 0,
    tails: 0,
    coinImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickTossButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState(prevState => ({count: prevState.count + 1}))

    if (tossResult === 0) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
      this.setState({
        coinImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
      this.setState({
        coinImage: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
  }

  render() {
    const {count, heads, tails, coinImage} = this.state

    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="title">Coin Toss Game</h1>
          <p className="choice">Heads (or) Tails</p>
          <img src={coinImage} alt="toss result" className="coin-image" />

          <button
            className="btn"
            type="button"
            onClick={this.onClickTossButton}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="total">Total: {count}</p>
            <p className="total">Heads: {heads}</p>
            <p className="total">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
