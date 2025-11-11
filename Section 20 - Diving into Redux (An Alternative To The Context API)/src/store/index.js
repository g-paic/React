import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";
// import { createStore } from "redux";

const store = configureStore({
    // reducer: counterSlice.reducer
    reducer: { counter: counterReducer, auth: authReducer }
});

export default store;
