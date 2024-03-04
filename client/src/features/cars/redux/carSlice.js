import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allCars: [],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setAllCars: (state, action) => {
      state.allCars = action.payload;
    },
  },
});

export const { setAllCars } = carSlice.actions;

export default carSlice.reducer;