import { useDispatch } from "react-redux";

function InputForm({ setForm }) {
    const dispatch = useDispatch();

    return (
        <form className="mb-3" style={{ width: "400px" }}>
            <div className="mb-2">
                <label className="form-label">First Name</label>
                <input className="form-control"></input>
            </div>
            <div className="mb-2">
                <label className="form-label">Last Name</label>
                <input className="form-control"></input>
            </div>
            <div className="mb-2">
                <label className="form-label">Email</label>
                <input className="form-control"></input>
            </div>
            <div className="mb-2">
                <label className="form-label">Phone</label>
                <input className="form-control"></input>
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
