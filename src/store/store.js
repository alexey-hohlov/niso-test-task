import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataReducer from "./reducers/DataSlice";

const rootReducer = combineReducers({
    dataReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};
