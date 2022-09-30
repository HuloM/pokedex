import React, { useCallback, useState } from "react";
import Pokemon from "./components/pokemon/Pokemon";
import PokemonObject from "./components/pokemon/PokemonObjectType";
import useInput from "./hooks/use-input";
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

    const {
        enteredInput: pokemonSearch,
        enteredInputIsValid: pokemonIsValid,
        inputIsInvalid: pokemonIsInvalid,
        inputBlurHandler: pokemonBlurHandler,
        inputChangeHandler: pokemonChangeHandler,
        resetOnFormSubmitHandler: resetPokemon,
    } = useInput(
        useCallback(
            (input: string) => input.trim() !== "" && input.length > 0,
            []
        )
    );

    const pokemon = async () => {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonSearch}/`,
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

    const handleFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        pokemon();
    };

    return (
        <div className="App">
            <Pokemon sprites={pokemonRetrieved.sprites} />
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label>
                        <span>Search</span>
                        <input
                            type="text"
                            onChange={pokemonChangeHandler}
                            value={pokemonSearch}
                        />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;
