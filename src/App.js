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
    Searchbar,
} from "./components";

function App() {
    // states from redux store
    const {
        data,
        isLoading,
        formActive,
        detailsShown,
        details,
        searchActive,
        searchData,
    } = useSelector((state) => state.dataReducer);

    // reducers
    const { setData, setLoading, setForm, setShown, setDetails, setNewRow } =
        dataSlice.actions;

    return (
        <div className="App">
            <div className="container">
                <Buttons
                    setLoading={setLoading}
                    setData={setData}
                    setForm={setForm}
                />

                <Searchbar />

                {formActive && (
                    <InputForm setForm={setForm} setNewRow={setNewRow} />
                )}
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
                        searchActive={searchActive}
                        searchData={searchData}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
