
function GameBoard({onSelectSquare,board}){

// const [gameBoard, setGameBoard] = useState(initialGameBoard);
// function handleSelectCell(rowIndex, colIndex){
//     setGameBoard(prevState => {
//         const updatedGameBoard = [...prevState.map(innerArr=>[...innerArr])];
//         updatedGameBoard[rowIndex][colIndex] = activePlayer;
//         return updatedGameBoard;
//     });
//     onSelectSquare();
// };

    
    return (
        <ol id="game-board">
           {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}><button onClick={()=>onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol !==null}>{playerSymbol}</button></li>)}
                    </ol>
                </li>))}
        </ol>   
    );

}

export default GameBoard;