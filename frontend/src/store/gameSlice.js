import { createSlice } from "@reduxjs/toolkit";

// Tạo slice cho người dùng
const gameSlice = createSlice({
  name: "game",
  initialState: {
    _id: "",
    gameName: "",
    gameType: 0,
    allowExchanged: false,
    description: "No description",
  },
  reducers: {
    setGame: (state, action) => {
      const { _id, gameName, gameType, allowExchanged, description } =
        action.payload;
      state._id = _id;
      state.gameName = gameName;
      state.gameType = gameType;
      state.allowExchanged = allowExchanged;
      state.description = description;
    },
  },
});

export const { setGame } = gameSlice.actions;
export default gameSlice.reducer;
