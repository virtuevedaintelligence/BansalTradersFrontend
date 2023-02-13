import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        registerAdmin(state, action) { },
        loginAdmin(state, action) { },
        generateOTP(state, action) { },
        verifyOTP(state, action) { },
    }
});

console.log(userSlice);
export default userSlice.reducer;