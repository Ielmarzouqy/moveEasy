import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allMovers: [],
};

const moverSlice = createSlice({
  name: "mover",
  initialState,
  reducers: {
    setAllMovers: (state, action) => {
      state.allMovers = action.payload;
    },
  },
});

export const { setAllMovers } = moverSlice.actions;

export default moverSlice.reducer;