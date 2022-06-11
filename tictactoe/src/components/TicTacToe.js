//import React from 'react'
import './TicTacToe.css'
//Import use state
import React, { useState } from 'react'

const TicTacToe = () => {
  //track alternating turns so create a hook (useState hook)
  const [play, setPlay] = useState('x')

  //track ites that are being clicked
const[cells, setCells] = useState(Array(9).fill(''));
const[winner, setWinner] = useState();


const CheckForWinner =(squares) => {
   {

    let lines ={
      across: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      ],
      down: [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      ],
      diagnol: [
      [0, 4, 8],
      [2, 4, 6],
      ],
    
  } ;

  for (let line in lines){
    lines[line].forEach((pattern) => {
      if (
        squares[pattern[0]] === '' ||
        squares[pattern[1]] === '' ||
        squares[pattern[2]] === '' 
      ){

      }else if(
        squares[pattern[0]] === squares[pattern[1]] &&
        squares[pattern[1]] === squares[pattern[2]] 
      ){
        setWinner(squares[pattern[0]]);
      }
    });
  }
};
}

  const handleClick = (num) => {
    if(cells[num] !== ''){
      alert('already clicked');
      return;
    }
    
    let squares = [...cells];
    //alert(num)

    if (play ==='X'){ 
      squares[num] = 'X';
      setPlay('O')
    } else{
      squares[num] = 'O';
      setPlay('X')
    }

    CheckForWinner(squares)
    setCells(squares);
    console.log(squares);
  };

  const handleRestart = () =>{
    setWinner(null);
    setCells(Array(9).fill(''));
  }
  //clicking
  //num is passed as a prop
  const Box = ({ num }) => {
    return <td onClick={() => handleClick(num)}> {cells[num]}</td>
  }
  
  
  //track each cell that is being clicked
  //props
  
  
  
  
  
  return (
    <div className ='gamebox' >
      <table>
        Play: {play}
        <tbody>
          <tr>
              <Box num={0} />
              <Box num={1}/>
              <Box num={2}/>
          </tr>
          <tr>
              <Box num={3} />
              <Box num={4} />
              <Box num={5} />
          </tr>
          <tr>
              <Box num={6}/>
              <Box num={7} />
              <Box num={8}/>
          </tr>
        </tbody>
      </table>
      {winner && (
        <>
          <p>{winner} is the winner!!!</p>
          <button onClick={() => handleRestart()}>Play Again</button>
        </>
      )}
    </div>
  );
};

export default TicTacToe