// import reducers
import { useSelector } from "react-redux";
import { userInputSlice } from "../store/reducers/UserSlice";

import { useDispatch } from "react-redux";

function InputForm({ setForm }) {
    // state from redux store
    const userInput = useSelector((state) => state.userInputReducer);

    // reducers for user input
    const { setName, setLast, setEmail, setPhone } = userInputSlice.actions;

    const dispatch = useDispatch();

    // dispatching value from input to store
    const handleInput = (reducer, value) => {
        dispatch(reducer(value));
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
                type="submit"
                className="btn btn-primary"
                onClick={() => {
                    dispatch(setForm(false));
                }}
            >
                Submit
            </button>
        </form>
    );
}

export default InputForm;
