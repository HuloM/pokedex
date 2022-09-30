import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SearchProp from "../SearchPropType";
import { Col, Row } from "react-bootstrap";

function PokemonForm(props: SearchProp) {
    return (
        <Form onSubmit={props.parentCallback}>
            <Form.Group className="mb-3 text-center w-50 mx-auto">
                <Form.Label>Search</Form.Label>
                <Form.Control
                    placeholder="pikachu"
                    type="text"
                    onChange={props.inputChangeHandler}
                    value={props.inputValue}
                />
            </Form.Group>
            <Row className="align-items-center">
                <Button
                    disabled={!props.inputIsValid}
                    variant="primary"
                    type="submit"
                    className="w-auto mx-auto"
                >
                    Submit
                </Button>
            </Row>
        </Form>
    );
}

export default PokemonForm;
