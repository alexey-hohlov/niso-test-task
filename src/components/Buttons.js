import { useDispatch } from "react-redux";

// API import
import { apiCall } from "../api/API";

function Buttons({ setLoading, setData, setForm }) {
    const dispatch = useDispatch();

    // get 1000 rows data
    const handleBigData = () => {
        dispatch(setLoading(true));
        apiCall.getBigData().then((response) => {
            dispatch(setLoading(false));
            dispatch(setData(response.data));
        });
    };

    // get 32 rows data
    const handleSmallData = () => {
        dispatch(setLoading(true));
        apiCall.getSmallData().then((response) => {
            dispatch(setLoading(false));
            dispatch(setData(response.data));
        });
    };

    // open form for user input
    const handleForm = () => {
        dispatch(setForm(true));
    };
    return (
        <div className="m-3">
            <button
                type="button"
                className="btn btn-success m-2"
                onClick={() => {
                    handleForm();
                }}
            >
                Add new row
            </button>
            <button
                type="button"
                className="btn btn-warning m-2"
                onClick={() => {
                    handleSmallData();
                }}
            >
                Get small data
            </button>
            <button
                type="button"
                className="btn btn-danger m-2"
                onClick={() => {
                    handleBigData();
                }}
            >
                Get big data
            </button>
        </div>
    );
}

export default Buttons;
