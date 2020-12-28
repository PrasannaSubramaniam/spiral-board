import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.totalCount = this.props.rowsCount * this.props.rowsCount;
    this.initialState = {
      currentPlayer: "X",
      score: {
        X: 0,
        Y: 0,
      },
      xDiceNumber: 0,
      yDiceNumber: 0,
      result: null,
    };
    this.state = JSON.parse(JSON.stringify(this.initialState));
  }
  checkLS = (score) => {
    switch (score) {
      case 1:
        return 23;
      case 5:
        return 14;
      case 21:
        return 42;
      case 29:
        return 85;
      case 36:
        return 58;
      case 68:
        return 89;
      case 78:
        return 99;
      case 25:
        return 3;
      case 35:
        return 10;
      case 47:
        return 7;
      case 57:
        return 38;
      case 77:
        return 52;
      case 97:
        return 61;
      default:
        return score;
    }
  };
  rolldice = () => {
    let { currentPlayer, score, xDiceNumber, yDiceNumber } = this.state;
    let diceNumber = Math.ceil(Math.random() * 6);
    score[currentPlayer] += diceNumber;
    if (currentPlayer === "X") {
      xDiceNumber = diceNumber;
    }
    if (currentPlayer === "Y") {
      yDiceNumber = diceNumber;
    }
    if (score[currentPlayer] > this.totalCount) {
      score[currentPlayer] -= diceNumber;
      this.setState({
        xDiceNumber,
        yDiceNumber,
        currentPlayer: currentPlayer === "X" ? "Y" : "X",
        score,
      });
    } else if (score[currentPlayer] === this.totalCount) {
      this.setState({
        xDiceNumber,
        yDiceNumber,
        score,
        result: `Player ${currentPlayer} WON`,
      });
    } else {
      score[currentPlayer] = this.checkLS(score[currentPlayer]);
      this.setState({
        xDiceNumber,
        yDiceNumber,
        currentPlayer: currentPlayer === "X" ? "Y" : "X",
        score,
      });
    }
  };
  resetBoard = () => {
    this.setState(JSON.parse(JSON.stringify(this.initialState)));
  };
  renderSquare = (squareIndex) => {
    let { score } = this.state;
    return (
      <div className="square">
        <span>{squareIndex}</span>
        {squareIndex === score["X"] ? <div className="player-x">X</div> : ""}
        {squareIndex === score["Y"] ? <div className="player-y">Y</div> : ""}
      </div>
    );
  };
  renderRow = (rowIndex, rowsCount) => {
    let renderedSquares = [];
    if (rowIndex % 2 == 0) {
      for (
        let squareIndex = rowsCount * rowIndex;
        squareIndex > rowsCount * rowIndex - rowsCount;
        squareIndex--
      ) {
        renderedSquares.push(this.renderSquare(squareIndex));
      }
    } else {
      for (
        let squareIndex = rowsCount * rowIndex - rowsCount + 1;
        squareIndex < rowsCount * rowIndex + 1;
        squareIndex++
      ) {
        renderedSquares.push(this.renderSquare(squareIndex));
      }
    }
    return <div className="row">{renderedSquares}</div>;
  };
  renderBoard = (rowsCount) => {
    let renderedRows = [];
    for (let rowIndex = rowsCount; rowIndex > 0; rowIndex--) {
      renderedRows.push(this.renderRow(rowIndex, rowsCount));
    }
    return <div className="board">{renderedRows}</div>;
  };
  renderLadders = () => {
    return (
      <div className="ladders">
        <div class="ladder-1 ladder"></div>
        <div class="ladder-2 ladder"></div>
        <div class="ladder-3 ladder"></div>
        <div class="ladder-4 ladder"></div>
        <div class="ladder-5 ladder"></div>
        <div class="ladder-6 ladder"></div>
        <div class="ladder-7 ladder"></div>
        <div class="ladder-8 ladder"></div>
      </div>
    );
  };
  renderSnakes = () => {
    return (
      <div className="snakes">
        <div class="snake-1 snake"></div>
        <div class="snake-2 snake"></div>
        <div class="snake-3 snake"></div>
        <div class="snake-4 snake"></div>
        <div class="snake-5 snake"></div>
        <div class="snake-6 snake"></div>
      </div>
    );
  };
  render() {
    return (
      <div className="app-container unselectable">
        <div className="result-container">
          {this.state.result ? (
            this.state.result
          ) : (
            <>
              <div className="result">
                Player {this.state.currentPlayer}'s Turn
              </div>
              <div className="dice-number">X : {this.state.xDiceNumber}</div>
              <div className="roll-button button" onClick={this.rolldice}>
                Roll Dice
              </div>
              <div className="dice-number">Y : {this.state.yDiceNumber}</div>
            </>
          )}
        </div>
        <div className="board-container">
          {this.renderBoard(this.props.rowsCount)}
          {this.renderLadders()}
          {this.renderSnakes()}
        </div>
        {this.state.result ? (
          <div className="reset-button button" onClick={this.resetBoard}>
            Reset
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
