import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formActive: false,
    isLoading: true,
    data: [],
};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setData(state, action) {
            state.data = action.payload;
        },
    },
});

export default dataSlice.reducer;
