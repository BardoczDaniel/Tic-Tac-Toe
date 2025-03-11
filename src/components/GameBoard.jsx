import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function GameBoard({onSelectSquare, activePlayer}){

const [gameBoard, setGameBoard] = useState(initialGameBoard);

function handleSelectCell(rowIndex, colIndex){

    setGameBoard(prevState => {

        const updatedGameBoard = [...prevState.map(innerArr=>[...innerArr])];
        updatedGameBoard[rowIndex][colIndex] = activePlayer;
        return updatedGameBoard;
    });

    onSelectSquare();
};

    

    return (
        <ol id="game-board">
           {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                    {row.map((col, colIndex) => <li key={colIndex}><button onClick={()=> handleSelectCell(rowIndex,colIndex)}>{col}</button></li>)}
                    </ol>
                </li>))}
        </ol>   
    );

}

export default GameBoard;