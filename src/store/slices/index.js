import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./UserSlice";

const store = configureStore({
    reducer: {
        users: userSlice,
    }
})

console.log(store);
export default store;