import { useState } from 'react';
import  Square from './Square';
import Reset from './Reset'

function Board() {
    const [xisNext, setXIsNext] = useState(true)
    const [squares, setSquares] = useState(Array(9).fill(null));
    //whole functionality
    function handleClick(i)                     //this function is used to maintain the state of game
    {
      {
        if (calculateWinner(squares) || squares[i])                 //returning the value before  Square state is updated
          return;
      }
      const nextSquares = squares.slice();    //it will give all the elements of the array in the form of a string. Here we are copying the value of square to nextSquare rather than changing the value of square 
      if (xisNext) {
        nextSquares[i] = 'X';                   //used to update the element of the array 
      } else {
        nextSquares[i] = 'O'
      }
      setSquares(nextSquares);
      setXIsNext(!xisNext);
    }
    //function to handle the reset
    function handleReset()
    {
        setSquares(Array(9).fill(null));
        setXIsNext(true)
    }
    //code to calculate the winner
      const winner = calculateWinner(squares);
      let result;
      if (winner) {
        result = "Winner " + winner + " !!!!!";
      }
      else {
        result = "Next Player " + (xisNext ? "X" : "O");
      }
    return (
      <div className='container main'>
        <h1 className="text-center">Let's Play Tic-Tac-Toe :-)</h1>
        <div className="winner my-4 text-center"><h4>{result}</h4></div>
        <div className="container box my-5">
          <div className="col">
            < Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            < Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            < Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          </div>
          <div className="col">
            < Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            < Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            < Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          </div>
          <div className="col">
            < Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            < Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            < Square value={squares[8]} onSquareClick={() => handleClick(8)} />
          </div>
        </div>
        <div className="container text-center">
        <Reset onResetStates={handleReset}/> 
        </div>
      </div>
    );
  }
  
  //helper function to declare the winner 
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  export default Board;