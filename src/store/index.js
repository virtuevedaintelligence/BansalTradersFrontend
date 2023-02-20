import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";
import cartSlice from "./slices/CartSlice";

const store = configureStore({
    reducer: {
        users: userSlice,
        cart: cartSlice,
    },
});
export default store;
