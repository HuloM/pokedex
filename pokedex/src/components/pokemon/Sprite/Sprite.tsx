import SpriteProp from "./SpritePropType";

function Sprite(props: SpriteProp): any {
    return (
        <div className="bg-light rounded">
            <img src={props.sprite} alt="" />
        </div>
    );
}

export default Sprite;
