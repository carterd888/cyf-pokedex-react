import React from "react";

const BestPokemon = ({ abilities }) => {
    return (
        <div>
            <p>My favourite pokemon is Bulbasaur</p>
            <ul>
                {abilities.map((name) => (
                    <li>{name}</li>
                ))}
            </ul>
        </div>)
}

export default BestPokemon;