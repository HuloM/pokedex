import { ChangeEventHandler, FormEventHandler } from "react";

interface SearchProp {
    parentCallback: FormEventHandler<HTMLFormElement>;
    inputChangeHandler: ChangeEventHandler<HTMLInputElement>;
    inputValue: string;
    inputIsValid: boolean;
}

export default SearchProp;
