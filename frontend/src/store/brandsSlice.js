import { createSlice } from "@reduxjs/toolkit";

// Tạo slice cho người dùng
const brandsSlice = createSlice({
  name: "brands",
  initialState: {
    brands: [],
    count: 0,
  },
  reducers: {
    setBrands: (state, action) => {
      state.brands = action.payload;
    },
    setCount: (state, action) => {
      state.count = action.payload; // Cập nhật số lượng người dùng
    },
    addBrand: (state, action) => {
      state.brands.push(action.payload);
      state.count += 1; // Cập nhật số lượng người dùng
    },
    deleteBrand: (state, action) => {
      state.brands = state.brands.filter(
        (brand) => brand._id !== action.payload
      );
      state.count -= 1; // Cập nhật số lượng người dùng
    },
  },
});

export const { setBrands, setCount, addBrand, deleteBrand } =
  brandsSlice.actions;
export default brandsSlice.reducer;
