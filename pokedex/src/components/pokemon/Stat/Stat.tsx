import StatProp from "./StatPropType";

function Stat(props: StatProp) {
    const stat = props.stat;

    return (
        <div className="mx-auto text-center fs-5">
            <p className="">{stat.stat.name}:</p>
            <p className="">{stat.base_stat}</p>
        </div>
    );
}

export default Stat;
