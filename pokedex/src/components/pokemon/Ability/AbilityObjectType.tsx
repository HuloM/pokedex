import AbilityName from "./AbilityNameObjectType";

interface AbilityObject {
    ability: AbilityName;
    is_hidden: boolean;
    slot: number;
}

export default AbilityObject;
