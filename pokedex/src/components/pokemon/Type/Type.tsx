import TypeProp from "./TypingPropType";
// TODO Eventually implement webpack to avoid importing all images
import bug from "./pokemonTypes/bug.PNG";
import dark from "./pokemonTypes/dark.PNG";
import dragon from "./pokemonTypes/dragon.PNG";
import electric from "./pokemonTypes/electric.PNG";
import fairy from "./pokemonTypes/fairy.PNG";
import fighting from "./pokemonTypes/fighting.PNG";
import fire from "./pokemonTypes/fire.PNG";
import flying from "./pokemonTypes/flying.PNG";
import ghost from "./pokemonTypes/ghost.PNG";
import grass from "./pokemonTypes/grass.PNG";
import ground from "./pokemonTypes/ground.PNG";
import ice from "./pokemonTypes/ice.PNG";
import normal from "./pokemonTypes/normal.PNG";
import poison from "./pokemonTypes/poison.PNG";
import psychic from "./pokemonTypes/psychic.PNG";
import rock from "./pokemonTypes/rock.PNG";
import steel from "./pokemonTypes/steel.PNG";
import water from "./pokemonTypes/water.PNG";
function Type(props: TypeProp) {
    let types: object = {
        bug: bug,
        dark: dark,
        dragon: dragon,
        electric: electric,
        fairy: fairy,
        fighting: fighting,
        fire: fire,
        flying: flying,
        ghost: ghost,
        grass: grass,
        ground: ground,
        ice: ice,
        normal: normal,
        poison: poison,
        psychic: psychic,
        rock: rock,
        steel: steel,
        water: water,
    };

    return (
        <div>
            <img src={types[props.type.name as keyof typeof types]} alt="" />
        </div>
    );
}

export default Type;
