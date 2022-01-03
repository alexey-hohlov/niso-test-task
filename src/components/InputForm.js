// import reducers
import { useSelector } from "react-redux";
import { userInputSlice } from "../store/reducers/UserSlice";

import { useDispatch } from "react-redux";

function InputForm({ setForm, setNewRow }) {
    // state from redux store
    const userInput = useSelector((state) => state.userInputReducer);

    const { firstName, lastName, email, phone } = useSelector(
        (state) => state.userInputReducer
    );

    // reducers for user input
    const { setName, setLast, setEmail, setPhone, setId, reset } =
        userInputSlice.actions;

    const dispatch = useDispatch();

    // dispatching value from input to store
    const handleInput = (reducer, value) => {
        // generating random id for item
        dispatch(setId(Math.floor(1 + Math.random() * 999)));

        dispatch(reducer(value));
    };

    // disabling button if some field is empty
    const handleButton = () => {
        if (firstName === "") {
            return true;
        }
        if (lastName === "") {
            return true;
        }
        if (email === "") {
            return true;
        }
        if (phone === "") {
            return true;
        }
    };

    return (
        <form className="mb-3" style={{ width: "400px" }}>
            <div className="mb-2">
                <label className="form-label">First Name</label>
                <input
                    className="form-control"
                    onChange={(e) => handleInput(setName, e.target.value)}
                ></input>
            </div>
            <div className="mb-2">
                <label className="form-label">Last Name</label>
                <input
                    className="form-control"
                    onChange={(e) => handleInput(setLast, e.target.value)}
                ></input>
            </div>
            <div className="mb-2">
                <label className="form-label">Email</label>
                <input
                    className="form-control"
                    onChange={(e) => handleInput(setEmail, e.target.value)}
                ></input>
            </div>
            <div className="mb-2">
                <label className="form-label">Phone</label>
                <input
                    className="form-control"
                    onChange={(e) => handleInput(setPhone, e.target.value)}
                ></input>
            </div>
            <button
                disabled={handleButton()}
                type="submit"
                className="btn btn-primary"
                onClick={() => {
                    dispatch(setNewRow(userInput));
                    dispatch(setForm(false));
                    dispatch(reset())
                }}
            >
                Submit
            </button>
        </form>
    );
}

export default InputForm;
