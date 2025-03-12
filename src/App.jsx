import{ useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import Log from "./components/Log";

import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function deriveActivePlayer(gameTurns){
  let curentPlayer = "X";

  if(gameTurns.length > 0 && gameTurns[0].player === "X"){
    curentPlayer = "O";
  }

  return curentPlayer;
}

function App() {

const[player,setPlayer] = useState({X:'Player 1',O:'Player 2'});

const[gameTurns, setGameTurns] = useState([]);

const curentPlayer = deriveActivePlayer(gameTurns);

let gameBoard = [...initialGameBoard.map(innerArr=>[...innerArr])]; //deep copy sau asa ***{ structuredClone(initialGameBoard)}***

for(const turn of gameTurns){
    const {square, player} = turn;
    gameBoard[square.row][square.col] = player;
}

let winner;

for(const combination of WINNING_COMBINATIONS){

  const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
  const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
  const thirdSquareSymbol =gameBoard[combination[2].row][combination[2].column];

  

  if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
    winner = player[firstSquareSymbol];
  } 

}

const hasDraw = gameTurns.length === 9 && !winner;

function handleSelectSquare(rowIndex, colIndex){

  setGameTurns(prevTurns=>{

    const curentPlayer = deriveActivePlayer(prevTurns);

    const updatedTurns = [{square:{row:rowIndex, col:colIndex}, player:curentPlayer},...prevTurns];
    return updatedTurns;
  })

};

function handleRestartGame(){
  setGameTurns([]);
}


function handlePlayerNameChange(symbol, newName){

  setPlayer(prevState => {
    return {
      ...prevState,
      [symbol]: newName
    }
  });

}

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={curentPlayer === 'X'} onChangeName={handlePlayerNameChange} />
          <Player initialName="Player 2" symbol="O" isActive={curentPlayer === 'O'} onChangeName={handlePlayerNameChange} />
        </ol>
        {(winner || hasDraw) && <GameOver onRestart={handleRestartGame} winner={winner}/>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
      </div>
      <Log turns={gameTurns}/>
    </main> 
  )
}

export default App
