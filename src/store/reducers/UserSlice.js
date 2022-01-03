import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: 0,
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
    },
});

export default userInputSlice.reducer;
