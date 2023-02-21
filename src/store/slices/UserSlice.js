import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../services/UserService";

export const usersOTPGenAction = createAsyncThunk("users-action-gen", async (user) => {
  const otpResponse = UserService.generateOtp(user);
  return (await otpResponse).data;
});

export const usersOTPVerifyAction = createAsyncThunk("users-action-verify", async (user) => {
  const otpResponse = UserService.verifyOtp(user);
  return (await otpResponse).data;
});

export const adminRegister = createAsyncThunk("admin-action-register", async (admin) => {
  console.log(admin);
  const otpResponse = UserService.registerAdmin(admin);
  return (await otpResponse).data;
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoadingOTPGen: false,
    dataOTPGen: null,
    isErrorOTPGen: false,
    isLoadingOTPVerify: false,
    dataOTPVerify: null,
    isErrorOTPVerify: false,
    isLoadingAdminRegister: false,
    dataAdminRegister: null,
    isErrorAdminRegister: false,
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
      console.log("Error", action.payload);
      state.isErrorOTPGen = true;
    });

    builder.addCase(usersOTPVerifyAction.pending, (state, action) => {
      state.isLoadingOTPVerify = true;
    });

    builder.addCase(usersOTPVerifyAction.fulfilled, (state, action) => {
      state.isLoadingOTPVerify = false;
      state.dataOTPVerify = action.payload;
    });

    builder.addCase(usersOTPVerifyAction.rejected, (state, action) => {
      state.isErrorOTPVerify = true;
      console.log(action.payload);
      state.dataOTPVerify = action.payload;
    });
    builder.addCase(adminRegister.pending, (state, action) => {
      state.isLoadingAdminRegister = true;
    });

    builder.addCase(adminRegister.fulfilled, (state, action) => {
      state.isLoadingAdminRegister = false;
      state.dataAdminRegister = action.payload;
    });

    builder.addCase(adminRegister.rejected, (state, action) => {
      state.isErrorAdminRegister = true;
      console.log(action);
      state.dataAdminRegister = action.payload;
    });
  },
});
export default userSlice.reducer;
