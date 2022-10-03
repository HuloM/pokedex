import Sprite from "./Sprite/Sprite";
import PokemonProp from "./PokemonPropType";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Stat from "./Stat/Stat";
import StatObject from "./Stat/StatObjectType";
import Type from "./Type/Type";
import MoveObject from "./Move/MoveObjectType";
import Move from "./Move/Move";
import MoveProp from "./Move/MovePropType";
function Pokemon(props: PokemonProp): any {
    const sprites = props.sprites;
    const stats = props.stats;
    const pokemonName = props.name;
    const id = props.id;
    const types = props.types;
    const moves = props.moves;

    return (
        <div>
            <Container className="md mx-auto">
                <div className="justify-content-md-center text-bg-dark bg-opacity-100 mx-auto rounded mb-2 w-50 fw-bold fs-3 text-center">
                    <Row className="w-75 justify-content-md-center mx-auto">
                        <Col>{pokemonName}</Col>
                        <Col>#{String(id).padStart(4, "0")} </Col>
                    </Row>
                    <Row className="w-50 justify-content-md-center mx-auto">
                        {Object.values(types).map(
                            (type) =>
                                type != null && (
                                    <Col>
                                        <Type type={type.type} slot={type} />{" "}
                                    </Col>
                                )
                        )}
                    </Row>
                </div>
                <Row
                    md={Object.values(sprites).length}
                    className="shadow-lg justify-content-md-center bg-dark rounded mx-auto w-75 p-3"
                >
                    {Object.values(sprites).map(
                        (spriteURL: string) =>
                            spriteURL !== null && (
                                <Col md="auto" className="p-3 mx-auto px-auto">
                                    <Sprite
                                        sprite={spriteURL}
                                        key={spriteURL}
                                    />
                                </Col>
                            )
                    )}
                </Row>
                <Row className="shadow-lg justify-content-md-center text-bg-dark bg-opacity-100 rounded mx-auto w-75 mt-2">
                    {Object.values(stats).map(
                        (stat: StatObject) =>
                            stat !== null && (
                                <Col md="auto">
                                    <Stat stat={stat} key={stat.stat.name} />
                                </Col>
                            )
                    )}
                </Row>
                <div className="shadow-lg justify-content-md-center text-bg-dark bg-opacity-100 rounded mx-auto w-75 mt-2 p-2">
                    {Object.values(moves).map(
                        (move: MoveProp) =>
                            move !== null && (
                                <Move move={move.move} key={move.move.name} />
                            )
                    )}
                </div>
            </Container>
        </div>
    );
}

export default Pokemon;
