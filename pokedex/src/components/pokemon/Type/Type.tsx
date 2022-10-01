import TypeProp from "./TypingPropType";
// TODO Eventually implement webpack to avoid importting all images
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
    var type: any;

    switch (props.type.name) {
        case "bug":
            type = bug;
            break;
        case "dark":
            type = dark;
            break;
        case "dragon":
            type = dragon;
            break;
        case "electric":
            type = electric;
            break;
        case "fairy":
            type = fairy;
            break;
        case "fighting":
            type = fighting;
            break;
        case "fire":
            type = fire;
            break;
        case "flying":
            type = flying;
            break;
        case "ghost":
            type = ghost;
            break;
        case "grass":
            type = grass;
            break;
        case "ground":
            type = ground;
            break;
        case "ice":
            type = ice;
            break;
        case "normal":
            type = normal;
            break;
        case "poison":
            type = poison;
            break;
        case "psychic":
            type = psychic;
            break;
        case "rock":
            type = rock;
            break;
        case "steel":
            type = steel;
            break;
        case "water":
            type = water;
            break;
        default:
            console.log("Unknown type: " + type);
            break;
    }

    console.log("type: " + type, props.type.name);
    return (
        <div>
            <img src={type} alt="" />
        </div>
    );
}

export default Type;
