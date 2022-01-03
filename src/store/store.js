import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataReducer from "./reducers/DataSlice";
import userInputReducer from "./reducers/UserSlice";

const rootReducer = combineReducers({
    dataReducer,
    userInputReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};
