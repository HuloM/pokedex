import Sprite from "./Sprites/Sprite";
import PokemonProp from "./PokemonPropType";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Stat from "./Stats/Stat";
import StatObject from "./Stats/StatObjectType";
import Type from "./Type/Type";
function Pokemon(props: PokemonProp): any {
    const sprites = props.sprites;
    const stats = props.stats;
    const pokemonName = props.name;
    const id = props.id;
    const types = props.types;

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
                <Row className="shadow-lg justify-content-md-center bg-dark rounded mx-auto w-75">
                    {Object.values(sprites).map(
                        (spriteURL: string) =>
                            spriteURL !== null && (
                                <Col md="auto">
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
            </Container>
        </div>
    );
}

export default Pokemon;
