import { createSlice } from "@reduxjs/toolkit";

// Tạo slice cho người dùng
const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "",
    password: "",
    rememberMe: false,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { userName, password, rememberMe } = action.payload;
      state.userName = userName;
      state.password = password;
      state.rememberMe = rememberMe;
    },
    clearCredentials: (state) => {
      state.userName = "";
      state.password = "";
      state.rememberMe = false;
    },
  },
});

export const { setCredentials, clearCredentials } = userSlice.actions;
export default userSlice.reducer;
