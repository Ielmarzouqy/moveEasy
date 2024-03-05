import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allBoxes:[],
};

const boxSlice = createSlice({
  name: "box",
  initialState,
  reducers: {
    setAllBoxes: (state, action) => {
      state.allBoxes = action.payload;
    },
  },
});

export const { setAllBoxes } = boxSlice.actions;

export default boxSlice.reducer;