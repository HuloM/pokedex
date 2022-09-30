import React from "react";
import Sprite from "./Sprites/Sprite";
import PokemonProp from "./PokemonPropType";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
function Pokemon(props: PokemonProp): any {
    const sprites = props.sprites;
    const pokemonName = props.name;

    return (
        <div>
            <Container className="md mx-auto">
                <Row className="justify-content-md-center text-bg-dark bg-opacity-100 mx-auto rounded my-1 w-25">
                    {pokemonName}
                </Row>
                <Row className="shadow-lg justify-content-md-center bg-dark rounded mx-auto w-75">
                    {Object.values(sprites).map(
                        (spriteURL: string) =>
                            spriteURL !== null && (
                                <Col md="auto">
                                    <Sprite sprite={spriteURL} />
                                </Col>
                            )
                    )}
                </Row>
            </Container>
        </div>
    );
}

export default Pokemon;
