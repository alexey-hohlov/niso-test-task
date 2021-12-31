// API import
import { apiCall } from "./api/API";

// import reducers
import { useDispatch, useSelector } from "react-redux";
import { dataSlice } from "./store/reducers/DataSlice";

// components import
import { MainTable, Buttons, InputForm, LoadingBadge, DetailedData } from "./components";

// import { MainTable } from "./components";

function App() {
    // states from redux store
    const { data, isLoading, formActive, detailsShown, details } = useSelector(
        (state) => state.dataReducer
    );
    
    // reducers
    const { setData, setLoading, setForm, setShown, setDetails } =
        dataSlice.actions;
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

    // show clicked item details
    const handleDetails = (item) => {
        dispatch(setShown(true));
        dispatch(setDetails(item));
    };

    return (
        <div className="App">
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

                {isLoading ? <LoadingBadge /> : <MainTable data={data} handleDetails={handleDetails}/>}
            </div>
        </div>
    );
}

export default App;
