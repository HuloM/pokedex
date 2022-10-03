import TypeObject from "../Type/TypeObjectType";
import DamageClass from "./DamageClassObjectType";

interface MoveData {
    damage_class?: DamageClass;
    type?: TypeObject;
    pp?: number;
    accuracy?: number;
    power?: number;
}

export default MoveData;
