
function Log({turns}){

    console.log(turns);

    return (
        <ol id="log">
            {turns.map((turn, index) => <li key={index}>{`Player ${turn.player}, (${turn.square.row + 1},${turn.square.col + 1})`}</li>)}
        </ol>
    );
}

export default Log;