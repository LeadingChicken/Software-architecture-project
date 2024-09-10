import { createSlice } from "@reduxjs/toolkit";

// Tạo slice cho người dùng
const brandSlice = createSlice({
  name: "brand",
  initialState: {
    _id: "",
    brandName: "",
    field: "",
    location: "",
    gps: "",
    status: "",
  },
  reducers: {
    setBrand: (state, action) => {
      const { _id, brandName, field, location, gps, status } = action.payload;
      state.brandName = brandName;
      state.field = field;
      state.location = location;
      state.gps = gps;
      state.status = status;
      state._id = _id;
    },
  },
});

export const { setBrand } = brandSlice.actions;
export default brandSlice.reducer;
