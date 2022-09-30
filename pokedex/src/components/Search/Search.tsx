import SearchProp from "./SearchPropType";
import PokemonForm from "./Form/PokemonForm";

function Search(props: SearchProp) {
    return (
        <div className="text-bg-dark bg-opacity-100 w-50 align-text-top mx-auto p-10 rounded">
            <PokemonForm
                parentCallback={props.parentCallback}
                inputChangeHandler={props.inputChangeHandler}
                inputValue={props.inputValue}
                inputIsValid={props.inputIsValid}
            />
        </div>
    );
}

export default Search;
