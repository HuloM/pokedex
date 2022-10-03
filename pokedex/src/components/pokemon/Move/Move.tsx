import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Type from "../Type/Type";
import MoveData from "./MoveDataType";
import MoveProp from "./MovePropType";
import status from "./MoveCategory/status.PNG";
import special from "./MoveCategory/special.PNG";
import physical from "./MoveCategory/physical.PNG";

function Move(prop: MoveProp) {
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
            const response = await fetch(prop.move.url, {
                method: "GET",
            });
            const data = await response.json();

            setMoveData(data);
            console.log(data);
        };
        getMoveData();
    }, []);

    return (
        <Row className="rounded text-bg-light w-auto h-auto my-1 mx-3 text-center bg-opacity-75">
            <Col>{prop.move.name}</Col>
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
        </Row>
    );
}

export default Move;
