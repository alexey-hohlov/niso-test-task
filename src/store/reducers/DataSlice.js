import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formActive: false,
    isLoading: false,
    detailsShown: false,
    data: [],
    details: {},
    searchData: [],
    searchInput: "",
    searchActive: false,
};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setData(state, action) {
            state.data = action.payload;
        },
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
        setForm(state, action) {
            state.formActive = action.payload;
        },
        setShown(state, action) {
            state.detailsShown = action.payload;
        },
        setDetails(state, action) {
            state.details = action.payload;
        },
        setNewRow(state, action) {
            state.data.unshift(action.payload);
        },
        setSearchData(state, action) {
            state.searchData = [];
            state.data.filter((item) => {
                if (JSON.stringify(item).includes(action.payload)) {
                    state.searchData.push(item);
                }
            });
        },
        setSearchInput(state, action) {
            state.searchInput = action.payload;
        },
        setSearchActive(state, action) {
            state.searchActive = action.payload;
        },
    },
});

export default dataSlice.reducer;
