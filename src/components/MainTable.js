// API import
import { apiCall } from "../api/API";

// import reducers
import { useDispatch, useSelector } from "react-redux";
import { dataSlice } from "../store/reducers/DataSlice";

// components import
import { Buttons, InputForm, LoadingBadge, DetailedData } from ".";

function MainTable() {
    const { data, isLoading, formActive, detailsShown, details } = useSelector(
        (state) => state.dataReducer
    );

    const { setData, setLoading, setForm, setShown, setDetails } =
        dataSlice.actions;
    const dispatch = useDispatch();

    const handleBigData = () => {
        dispatch(setLoading(true));
        apiCall.getBigData().then((response) => {
            dispatch(setLoading(false));
            dispatch(setData(response.data));
        });
    };

    const handleSmallData = () => {
        dispatch(setLoading(true));
        apiCall.getSmallData().then((response) => {
            dispatch(setLoading(false));
            dispatch(setData(response.data));
        });
    };

    const handleForm = () => {
        dispatch(setForm(true));
    };

    const handleDetails = (item) => {
        dispatch(setShown(true));
        dispatch(setDetails(item));
    };

    return (
        <div>
            <div className="container">
                <Buttons
                    handleBigData={handleBigData}
                    handleSmallData={handleSmallData}
                    handleForm={handleForm}
                />

                {formActive && <InputForm setForm={setForm} />}
                {detailsShown && (
                    <DetailedData details={details} setShown={setShown} />
                )}

                {isLoading ? (
                    <LoadingBadge />
                ) : (
                    <table className="table table-striped me-3">
                        <thead>
                            <tr className="table-primary">
                                <th scope="col">id</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr
                                    key={index}
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                        handleDetails(item);
                                    }}
                                >
                                    <td>{item.id}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default MainTable;
