import React from 'react';


const Players = props => {
    console.log(props, 'players');
    return (
        <>
        {props.players.map(player => (
            <div className="player-card" key={player.id}>
                <h3>{player.name}</h3>
                <h4>Team: {player.country}</h4>
                <p># of times Googled: {player.searches}</p>
            </div>
        ))}
        </>
    )
}

export default Players