import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { dataSlice } from "../store/reducers/DataSlice";

function Searchbar() {
    const dispatch = useDispatch();

    // importing states and actions for search from redux store
    const { searchInput } = useSelector((state) => state.dataReducer);

    const { setSearchInput, setSearchData, setSearchActive } =
        dataSlice.actions;

    // checking search input
    const handleActive = () => {
        if (searchInput === "") {
            dispatch(setSearchActive(false));
        } else {
            dispatch(setSearchActive(true));
        }
    };

    return (
        <form
            className="d-flex mb-3"
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            <input
                value={searchInput}
                onChange={(e) => {
                    dispatch(setSearchInput(e.target.value));
                }}
                style={{ maxWidth: "500px" }}
                className="form-control me-2"
                type="search"
                placeholder="Search"
            ></input>
            <button
                className="btn btn-outline-success"
                type="button"
                onClick={() => {
                    dispatch(setSearchData(searchInput));
                    handleActive();
                }}
            >
                Search
            </button>
        </form>
    );
}

export default Searchbar;
