import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formActive: false,
    isLoading: false,
    data: [],
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
    },
});

export default dataSlice.reducer;
