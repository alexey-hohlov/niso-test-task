// import reducers
import { useSelector } from "react-redux";
import { dataSlice } from "./store/reducers/DataSlice";

// components import
import {
    MainTable,
    Buttons,
    InputForm,
    LoadingBadge,
    DetailedData,
} from "./components";

// import { MainTable } from "./components";

function App() {
    // states from redux store
    const { data, isLoading, formActive, detailsShown, details } = useSelector(
        (state) => state.dataReducer
    );

    // reducers
    const { setData, setLoading, setForm, setShown, setDetails } =
        dataSlice.actions;

    return (
        <div className="App">
            <div className="container">
                <Buttons
                    setLoading={setLoading}
                    setData={setData}
                    setForm={setForm}
                />

                {formActive && <InputForm setForm={setForm} />}
                {detailsShown && (
                    <DetailedData details={details} setShown={setShown} />
                )}

                {isLoading ? (
                    <LoadingBadge />
                ) : (
                    <MainTable
                        data={data}
                        setDetails={setDetails}
                        setShown={setShown}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
