import React from "react";

const Logo = ({ appName }) => {
    return (
        <header>
            <h1>Welcome to the {appName}</h1>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" 
            alt="Bulbasaur"></img>
        </header>
    );
};

export default Logo;