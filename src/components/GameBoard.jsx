
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function GameBoard({onSelectSquare,turns}){

let gameBoard = initialGameBoard;

for(const turn of turns){
    const {square, player} = turn;
    gameBoard[square.row][square.col] = player;
}

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
           {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}><button onClick={()=>onSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button></li>)}
                    </ol>
                </li>))}
        </ol>   
    );

}

export default GameBoard;