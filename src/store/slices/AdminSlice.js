import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../services/UserService";

export const adminRegister = createAsyncThunk("admin-action-register", async (admin) => {
  const adminReqResponse = UserService.registerAdmin(admin);
  return (await adminReqResponse).data;
});

export const adminLogin = createAsyncThunk("admin-action-login", async (admin) => {
  const adminLoginResponse = UserService.loginAdmin(admin);
  return (await adminLoginResponse).data;
});

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    isLoadingAdminRegister: false,
    dataAdminRegister: null,
    isErrorAdminRegister: false,
    isLoadingAdminLogin: false,
    dataAdminLogin: null,
    isErrorAdminLogin: false,
  },
  extraReducers: (builder) => {
    builder.addCase(adminRegister.pending, (state, action) => {
      state.isLoadingAdminRegister = true;
    });

    builder.addCase(adminRegister.fulfilled, (state, action) => {
      state.isLoadingAdminRegister = false;
      state.dataAdminRegister = action.payload;
    });

    builder.addCase(adminRegister.rejected, (state, action) => {
      state.isErrorAdminRegister = true;
    });

    builder.addCase(adminLogin.pending, (state, action) => {
      state.isLoadingAdminLogin = true;
    });

    builder.addCase(adminLogin.fulfilled, (state, action) => {
      state.isLoadingAdminLogin = false;
      state.dataAdminLogin = action.payload;
    });

    builder.addCase(adminLogin.rejected, (state, action) => {
      state.isErrorAdminLogin = true;
    });
  },
});
export default adminSlice.reducer;
