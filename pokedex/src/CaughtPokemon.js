import React, {useState} from "react";

function CaughtPokemon({ date }) {
    const [caught, setCaught] = useState([]);
    const [pokemonNameInput, setPokemonNameInput] = useState("");

    function handleInputChange(event) {
      setPokemonNameInput(event.target.value)
      
    }
    function catchPokemon() {
      if(pokemonNameInput){
setCaught(caught.concat(pokemonNameInput));
setPokemonNameInput(""); 
      }
        
        // console.log(caught);
    }
    return (
      <div>
        <p>
          {" "}
          caught {caught.length} Pokemon on {date}
        </p>
        <input
          type="text"
          placeholder="pokemon Name"
          value={pokemonNameInput}
          onChange={handleInputChange}
        />
        <button onClick={catchPokemon}>Click to catch</button>
        <ul>
          {caught.map((poke, index) => (
            <li key={index}>{poke}</li>
          ))}
        </ul>
      </div>
    );
}

export default CaughtPokemon;