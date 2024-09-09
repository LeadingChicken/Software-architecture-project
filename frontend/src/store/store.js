import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/store/userSlice"; // Đường dẫn tới userSlice
import usersReducer from "@/store/usersSlice"; // Đường dẫn tới usersSlice
import brandReducer from "@/store/brandSlice"; // Đường dẫn tới userSlice
import brandsReducer from "@/store/brandsSlice"; // Đường dẫn tới usersSlice

const store = configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer,
    brand: brandReducer,
    brands: brandsReducer,
  },
});

export default store;
