import StatProp from "./StatPropType";
import ProgressBar from "react-bootstrap/ProgressBar";

function Stat(props: StatProp) {
    const stat = props.stat;

    return (
        <div className="fs-5">
            {stat.stat.name}:
            <ProgressBar
                now={stat.base_stat}
                max={255}
                label={stat.base_stat}
                variant="primary"
                className="fs-5 w-auto h-auto"
            />
        </div>
    );
}

export default Stat;
