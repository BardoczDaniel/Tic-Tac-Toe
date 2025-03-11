import{ useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";


function deriveActivePlayer(gameTurns){
  let curentPlayer = "X";

  if(gameTurns.length > 0 && gameTurns[0].player === "X"){
    curentPlayer = "O";
  }

  return curentPlayer;
}


function App() {

const[gameTurns, setGameTurns] = useState([]);

const curentPlayer = deriveActivePlayer(gameTurns);


function handleSelectSquare(rowIndex, colIndex){

  setGameTurns(prevTurns=>{

    const curentPlayer = deriveActivePlayer(prevTurns);

    const updatedTurns = [{square:{row:rowIndex, col:colIndex}, player:curentPlayer},...prevTurns];
    return updatedTurns;
  })

};


  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={curentPlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={curentPlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>
      <Log turns={gameTurns}/>
    </main> 
  )
}

export default App
