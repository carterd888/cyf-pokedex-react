import React from 'react';
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import Logo from "./Logo";
import PokemonMovesSelector  from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";

function App() {
  function logWhenClicked() {
    console.log("poke");
  }
  return (
    <div>
      <Logo handleClick={logWhenClicked} appName="Pokedex" />
      <BestPokemon abilities={["Anticipation", "Adaptability", "Run-Away"]} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
};

export default App;
