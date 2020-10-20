import { createSlice } from "@reduxjs/toolkit";

export const addressesSlice = createSlice({
  name: "addresses",
  initialState: {
    addresses: [],
  },
  reducers: {
    addAddress: (state, action) => {
      const addresses = state.addresses;
      addresses.push(action.payload);
      state.addresses = addresses;
    },
  },
});

export const { addAddress } = addressesSlice.actions;

export const selectAddresses = (state) => state.addresses.addresses;

export default addressesSlice.reducer;
