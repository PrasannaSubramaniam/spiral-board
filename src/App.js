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
      diceNumber: 0,
      result: null,
    };
    this.state = JSON.parse(JSON.stringify(this.initialState));
  }
  rolldice = () => {
    let { currentPlayer } = this.state;
    let { score } = this.state;
    let diceNumber = Math.ceil(Math.random() * 6);
    score[currentPlayer] += diceNumber;
    if (score[currentPlayer] > this.totalCount) {
      score[currentPlayer] -= diceNumber;
      this.setState({
        diceNumber,
        currentPlayer: currentPlayer === "X" ? "Y" : "X",
        score,
      });
    } else if (score[currentPlayer] === this.totalCount) {
      this.setState({
        diceNumber,
        score,
        result: `Player ${currentPlayer} WON`,
      });
    } else {
      this.setState({
        diceNumber,
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
        {squareIndex === score["X"] ? "X" : ""}
        {squareIndex === score["Y"] ? "Y" : ""}
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
  render() {
    return (
      <div className="app-container">
        <div className="result-container unselectable">
          {this.state.result ? (
            this.state.result
          ) : (
            <>
              <div className="result">
                Player {this.state.currentPlayer}'s Turn
              </div>
              <div className="roll-button button" onClick={this.rolldice}>
                Roll Dice
              </div>
              <div className="dice-number">{this.state.diceNumber}</div>
            </>
          )}
        </div>
        <div className="board-container">
          {this.renderBoard(this.props.rowsCount)}
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
