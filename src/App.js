import React, { useState } from "react";
import "./App.css";

const App = (props) => {
  const totalCount = props.rowsCount * props.rowsCount;
  const [currentPlayer, setcurrentPlayer] = useState("X");
  const [score, setscore] = useState({ X: 0, Y: 0 });
  const [xDiceNumber, setxDiceNumber] = useState(0);
  const [yDiceNumber, setyDiceNumber] = useState(0);
  const [result, setresult] = useState(null);
  const checkLS = (s) => {
    switch (s) {
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
        return s;
    }
  };
  const rolldice = () => {
    // let { currentPlayer, score, xDiceNumber, yDiceNumber } = this.state;
    let diceNumber = Math.ceil(Math.random() * 6);
    let s = { ...score };
    s[currentPlayer] = score[currentPlayer] + diceNumber;
    if (currentPlayer === "X") {
      setxDiceNumber(diceNumber);
    }
    if (currentPlayer === "Y") {
      setyDiceNumber(diceNumber);
    }
    if (s[currentPlayer] > totalCount) {
      s[currentPlayer] -= diceNumber;
      setcurrentPlayer(currentPlayer === "X" ? "Y" : "X");
      setscore(s);
      // this.setState({
      //   xDiceNumber,
      //   yDiceNumber,
      //   currentPlayer: currentPlayer === "X" ? "Y" : "X",
      //   score,
      // });
    } else if (s[currentPlayer] === totalCount) {
      setscore(s);
      setresult(`Player ${currentPlayer} WON`);
      // this.setState({
      //   xDiceNumber,
      //   yDiceNumber,
      //   score,
      //   result: `Player ${currentPlayer} WON`,
      // });
    } else {
      s[currentPlayer] = checkLS(s[currentPlayer]);
      // this.setState({
      //   xDiceNumber,
      //   yDiceNumber,
      //   currentPlayer: currentPlayer === "X" ? "Y" : "X",
      //   score,
      // });
      setscore(s);
      setcurrentPlayer(currentPlayer === "X" ? "Y" : "X");
    }
  };
  const resetBoard = () => {
    setcurrentPlayer("X");
    setscore({ X: 0, Y: 0 });
    setxDiceNumber(0);
    setyDiceNumber(0);
    setresult(null);
  };
  const renderSquare = (squareIndex) => {
    return (
      <div className="square">
        <span>{squareIndex}</span>
        {squareIndex === score["X"] ? <div className="player-x">X</div> : ""}
        {squareIndex === score["Y"] ? <div className="player-y">Y</div> : ""}
      </div>
    );
  };
  const renderRow = (rowIndex, rowsCount) => {
    let renderedSquares = [];
    if (rowIndex % 2 == 0) {
      for (
        let squareIndex = rowsCount * rowIndex;
        squareIndex > rowsCount * rowIndex - rowsCount;
        squareIndex--
      ) {
        renderedSquares.push(renderSquare(squareIndex));
      }
    } else {
      for (
        let squareIndex = rowsCount * rowIndex - rowsCount + 1;
        squareIndex < rowsCount * rowIndex + 1;
        squareIndex++
      ) {
        renderedSquares.push(renderSquare(squareIndex));
      }
    }
    return <div className="row">{renderedSquares}</div>;
  };
  const renderBoard = (rowsCount) => {
    let renderedRows = [];
    for (let rowIndex = rowsCount; rowIndex > 0; rowIndex--) {
      renderedRows.push(renderRow(rowIndex, rowsCount));
    }
    return <div className="board">{renderedRows}</div>;
  };
  const renderLadders = () => {
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
  const renderSnakes = () => {
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
  return (
    <div className="app-container unselectable">
      <div className="result-container">
        {result ? (
          result
        ) : (
          <>
            <div className="result">Player {currentPlayer}'s Turn</div>
            <div className="dice-number">X : {xDiceNumber}</div>
            <div className="roll-button button" onClick={rolldice}>
              Roll Dice
            </div>
            <div className="dice-number">Y : {yDiceNumber}</div>
          </>
        )}
      </div>
      <div className="board-container">
        {renderBoard(props.rowsCount)}
        {renderLadders()}
        {renderSnakes()}
      </div>
      {result ? (
        <div className="reset-button button" onClick={resetBoard}>
          Reset
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
