import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

let store = configureStore({
    reducer: {
        cart: CartSlice
    }
});

export default store;