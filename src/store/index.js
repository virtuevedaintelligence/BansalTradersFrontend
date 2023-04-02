import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";
import cartSlice from "./slices/CartSlice";
import adminSlice from "./slices/AdminSlice";

const store = configureStore({
    reducer: {
        users: userSlice,
        cart: cartSlice,
        admin: adminSlice,
    },
});
export default store;
