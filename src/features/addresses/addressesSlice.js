import { createSlice } from "@reduxjs/toolkit";

export const addressesSlice = createSlice({
  name: "addresses",
  initialState: {
    addresses: [],
    message: "",
    validatedSuccess: "none",
  },
  reducers: {
    addAddress: (state, action) => {
      const addresses = state.addresses;
      addresses.push(action.payload);
      state.addresses = addresses;
    },
    setAddresses: (state, action) => {
      state.addresses = action.payload;
    },
    setMessageWhenValidationSucceded: (state) => {
      state.validationMessage = "Validation succeded!";
      state.validatedSuccess = true;
    },
    setMessageWhenValidationFailed: (state) => {
      state.validationMessage = "Validation failed!";
      state.validatedSuccess = false;
    },
    setCleanMessegesArguments: (state) => {
      state.message = "";
      state.validatedSuccess = "none";
    },
  },
});

export const {
  addAddress,
  setAddresses,
  toggleValidationMessage,
} = addressesSlice.actions;

export const selectAddresses = (state) => state.addresses.addresses;

export default addressesSlice.reducer;
