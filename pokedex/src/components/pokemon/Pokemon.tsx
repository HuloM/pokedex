import React from "react";
import Sprite from "./Sprites/Sprite";
import PokemonProp from "./PokemonPropType";

function Pokemon(props: PokemonProp): any {
    const sprites = props.sprites;
    console.log("test");
    Object.values(sprites).forEach((key) => console.log(key));

    return (
        <div>
            <div>
                {Object.values(sprites).map(
                    (spriteURL: string) =>
                        spriteURL !== null && <Sprite sprite={spriteURL} />
                )}
            </div>
        </div>
    );
}

export default Pokemon;
