import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../services/UserService";

export const usersOTPGenAction = createAsyncThunk('users-action', async (user) => {
    const otpResponse = UserService.generateOtp(user);
    console.log(otpResponse.data);
    return (await otpResponse).data;
})

const userSlice = createSlice({
    name: "users",
    initialState: {
        isLoadingOTPGen: false,
        dataOTPGen: null,
        isErrorOTPGen: false
    },
    extraReducers: (builder) => {
        builder.addCase(usersOTPGenAction.pending, (state, action) => {
            state.isLoadingOTPGen = true;
        });

        builder.addCase(usersOTPGenAction.fulfilled, (state, action) => {
            state.isLoadingOTPGen = false;
            state.dataOTPGen = action.payload;
        });

        builder.addCase(usersOTPGenAction.rejected, (state, action) => {
            console.log("Error", action.payload)
            state.isErrorOTPGen = true;
        });
    }

});

console.log(userSlice);
export default userSlice.reducer;