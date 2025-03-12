import { useState } from "react";


function Player({initialName, symbol, isActive, onChangeName}) {

  const [isEditing, setIsEditing] = useState({playerName: initialName, playerSymbol: symbol, state: false});
  


  function handleEdit(event) {

    if(event.type === "click"){

      if(isEditing.state){
        onChangeName(symbol, isEditing.playerName);
      }
      
      setIsEditing(prevSatate => {
        return {
          ...prevSatate,
          state: !prevSatate.state
        }
      });
    }

    else if(event.type === "change"){

      setIsEditing(prevSatate => {
        return {
          ...prevSatate,
          playerName: event.target.value
        }
      });

    }

  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing.state ? <input type="text" onChange={handleEdit} required value={isEditing.playerName}/>: <span className="player-name">{isEditing.playerName}</span>}
          <span className="player-symbol">{isEditing.playerSymbol}</span>
      </span>
          <button onClick={handleEdit}>{isEditing.state ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;