import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  pendingOrders: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setPendingOrders: (state, action) => {
      state.pendingOrders = action.payload;
    },
  },
});

export const { setPendingOrders } = orderSlice.actions;

export default orderSlice.reducer;