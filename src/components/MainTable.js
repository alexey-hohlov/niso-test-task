// API import
import { apiCall } from "../api/API";

// import reducers
import { useDispatch, useSelector } from "react-redux";
import { dataSlice } from "../store/reducers/DataSlice";

// components import
import { Buttons, LoadingBadge } from ".";

function MainTable() {
    const { data, isLoading } = useSelector((state) => state.dataReducer);

    const { setData, setLoading } = dataSlice.actions;
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

    return (
        <div className="container">
            <Buttons
                handleBigData={handleBigData}
                handleSmallData={handleSmallData}
            />

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
                            <tr key={index} style={{ cursor: "pointer" }}>
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
    );
}

export default MainTable;
