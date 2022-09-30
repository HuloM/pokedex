import React, { useState } from "react";
import Pokemon from "./components/pokemon/Pokemon";
import PokemonObject from "./components/pokemon/PokemonObjectType";
function App() {
    const [pokemonRetrieved, setPokemonRetrieved] = useState<
        Partial<PokemonObject>
    >({
        abilities: {},
        base_experience: 0,
        forms: [],
        height: 0,
        id: 0,
        is_default: false,
        moves: [],
        name: "",
        species: {},
        sprites: {},
        stats: [],
        types: [],
        weight: 0,
    });

    const pokemon = async (pokemonID: string) => {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonID}/`,
            {
                method: "GET",
            }
        );
        const data = await response.json();
        console.log(data);

        setPokemonRetrieved(data);
        console.log("retrieved");
        console.log(pokemonRetrieved);
    };
    pokemon("1");

    return (
        <div className="App">
            <Pokemon sprites={pokemonRetrieved.sprites} />
        </div>
    );
}

export default App;
