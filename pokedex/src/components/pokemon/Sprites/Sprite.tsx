import SpriteProp from "./SpritePropType";

function Sprite(props: SpriteProp): any {
    return (
        <div>
            <img src={props.sprite} alt="" />
        </div>
    );
}

export default Sprite;
