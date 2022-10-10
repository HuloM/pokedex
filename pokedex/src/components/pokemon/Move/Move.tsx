import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Type from "../Type/Type";
import MoveData from "./MoveDataType";
import MoveProp from "./MovePropType";
import status from "./MoveCategory/status.PNG";
import special from "./MoveCategory/special.PNG";
import physical from "./MoveCategory/physical.PNG";

function Move(props: MoveProp) {
    const [moveData, setMoveData] = useState<Partial<MoveData>>({
        damage_class: {
            name: "",
        },
        type: {
            name: "",
        },
        pp: 0,
        accuracy: 0,
    });

    const moveCategories = {
        status: status,
        special: special,
        physical: physical,
    };

    useEffect(() => {
        const getMoveData = async function () {
            const response = await fetch(props.move.url, {
                method: "GET",
            });
            const data = await response.json();

            setMoveData(data);
        };
        getMoveData();
    }, []);

    return (
        <Row className="rounded text-bg-light w-auto h-auto my-2 mx-2 text-center bg-opacity-75 py-1">
            <Col>{props.move.name}</Col>
            <Col>
                {moveData.type != null && (
                    <Type slot={1} type={moveData.type}></Type>
                )}
            </Col>
            <Col>
                <img
                    src={
                        moveCategories[
                            moveData.damage_class
                                ?.name as keyof typeof moveCategories
                        ]
                    }
                    alt=""
                />
            </Col>
            <Col>{moveData.power !== null && `Power: ${moveData.power}`}</Col>
            <Col>{moveData.pp !== null && `PP: ${moveData.pp}`}</Col>
            <Col>
                {moveData.accuracy !== null && `Accuracy: ${moveData.accuracy}`}
            </Col>
        </Row>
    );
}

export default Move;
