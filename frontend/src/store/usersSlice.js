import { createSlice } from "@reduxjs/toolkit";

// Tạo slice cho người dùng
const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    count: 0,
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setCount: (state, action) => {
      state.count = action.payload; // Cập nhật số lượng người dùng
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
      state.count += 1; // Cập nhật số lượng người dùng
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user._id !== action.payload);
      state.count -= 1; // Cập nhật số lượng người dùng
    },
  },
});

export const { setUsers, setCount, addUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
