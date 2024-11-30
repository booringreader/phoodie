import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer: { // contains reducers for each slice
        cart: cartReducer,
    },
});

export default appStore;