import { createSlice } from "@reduxjs/toolkit";

// Tạo slice cho người dùng
const userSlice = createSlice({
  name: "user",
  initialState: {
    _id: "",
    userName: "",
    password: "",
    isAdmin: false,
    email: "",
    fullName: "",
    phoneNumber: "",
    rememberMe: false,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { userName, password, rememberMe } = action.payload;
      state.userName = userName;
      state.password = password;
      state.rememberMe = rememberMe;
    },
    setUser: (state, action) => {
      const { _id, userName, password, isAdmin, email, fullName, phoneNumber } =
        action.payload;
      state.userName = userName;
      state.password = password;
      state._id = _id;
      state.isAdmin = isAdmin;
      state.email = email;
      state.fullName = fullName;
      state.phoneNumber = phoneNumber;
    },
    clearCredentials: (state) => {
      state.userName = "";
      state.password = "";
      state.rememberMe = false;
    },
  },
});

export const { setCredentials, setUser, clearCredentials } = userSlice.actions;
export default userSlice.reducer;
