import React from 'react';
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import Logo from "./Logo";

function App() {
  return <div>
  <Logo appName="Pokedex" />
    <BestPokemon abilities={["Anticipation", "Adaptability", "Run-Away"]}  />
    <CaughtPokemon date={new Date().toLocaleDateString()} />
  </div>;
};

export default App;
