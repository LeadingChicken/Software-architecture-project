import { createSlice } from "@reduxjs/toolkit";

// Tạo slice cho người dùng
const gamesSlice = createSlice({
  name: "brands",
  initialState: {
    games: [],
    count: 0,
  },
  reducers: {
    setGames: (state, action) => {
      state.games = action.payload;
    },
    setCount: (state, action) => {
      state.count = action.payload; // Cập nhật số lượng người dùng
    },
    addGame: (state, action) => {
      state.games.push(action.payload);
      state.count += 1; // Cập nhật số lượng người dùng
    },
    deleteGame: (state, action) => {
      state.games = state.games.filter((game) => game._id !== action.payload);
      state.count -= 1; // Cập nhật số lượng người dùng
    },
  },
});

export const { setGames, setCount, addGame, deleteGame } = gamesSlice.actions;
export default gamesSlice.reducer;
