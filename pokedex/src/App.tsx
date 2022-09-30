import React, { useCallback, useState } from "react";
import Pokemon from "./components/pokemon/Pokemon";
import PokemonObject from "./components/pokemon/PokemonObjectType";
import Search from "./components/Search/Search";
import useInput from "./hooks/use-input";
import "bootstrap/dist/css/bootstrap.min.css";
import { Stack } from "react-bootstrap";

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
            (input: string) => input.trim() !== "" && input.length > 1,
            []
        )
    );

    const pokemon = async () => {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonSearch.trim()}/`,
            {
                method: "GET",
            }
        );
        const data = await response.json();

        setPokemonRetrieved(data);
        resetPokemon();
    };

    const handleFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        pokemon();
    };

    return (
        <div className="App bg-primary h-100 bg-opacity-50 min-vh-100">
            <Stack gap={3}>
                <Search
                    parentCallback={handleFormSubmit}
                    inputChangeHandler={pokemonChangeHandler}
                    inputValue={pokemonSearch}
                    inputIsValid={pokemonIsValid}
                />
                <Pokemon
                    sprites={pokemonRetrieved.sprites}
                    name={pokemonRetrieved.name}
                />
            </Stack>
        </div>
    );
}

export default App;
