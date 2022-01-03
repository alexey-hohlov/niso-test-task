import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
};

export const userInputSlice = createSlice({
    name: "userInput",
    initialState,
    reducers: {
        setName(state, action) {
            state.firstName = action.payload;
        },
        setLast(state, action) {
            state.lastName = action.payload;
        },
        setEmail(state, action) {
            state.email = action.payload;
        },
        setPhone(state, action) {
            state.phone = action.payload;
        },
        setId(state, action) {
            state.id = action.payload;
        },
        reset: () => initialState,
    },
});

export default userInputSlice.reducer;
