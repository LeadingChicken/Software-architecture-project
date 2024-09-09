import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/store/userSlice"; // Đường dẫn tới userSlice
import usersReducer from "@/store/usersSlice"; // Đường dẫn tới usersSlice

const store = configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer,
  },
});

export default store;
