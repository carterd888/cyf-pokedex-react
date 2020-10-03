import React from "react";

const Logo = ({handleClick, appName}) => {
    return (
        <header>
            <h1>Welcome to the {appName}</h1>
            <img onClick = {handleClick} 
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" 
            alt="Bulbasaur"/>
        </header>
    );
};

export default Logo;