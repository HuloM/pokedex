import SearchProp from "./SearchPropType";

function Search(props: SearchProp) {
    return (
        <div>
            <form onSubmit={props.parentCallback}>
                <div>
                    <label>
                        <span>Search</span>
                        <input
                            type="text"
                            onChange={props.inputChangeHandler}
                            value={props.inputValue}
                        />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Search;
