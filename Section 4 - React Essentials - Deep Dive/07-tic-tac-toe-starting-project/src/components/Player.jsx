import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    
    function handleEditClick() {
        // setIsEditing(!isEditing); => schedules a state update to true, it doesn't immediately change that state
        // setIsEditing(!isEditing); => schedules a same state update also to true
        setIsEditing(editing => !editing); // it immediately changes the state
        // setIsEditing(editing => !editing); => it gets the latest available state as a parameter

        if(isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = (<span className="player-name">{playerName}</span>);
    let btnCaption = "Edit";

    if(isEditing) {
        editablePlayerName = (<input type="text" required value={playerName} onChange={handleChange}/>);
        btnCaption = "Save";
    }
    
    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}
