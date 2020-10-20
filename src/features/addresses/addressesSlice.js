import { createSlice } from "@reduxjs/toolkit";

import * as reducers from "features/addresses/addressesSlice";

export const addressesSlice = createSlice({
  name: "addresses",
  initialState: {
    addresses: [],
    message: "",
    validatedSuccess: true,
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
      state.message = "Validation succeded!";
      state.validatedSuccess = true;
    },
    setMessageWhenValidationFailed: (state) => {
      state.message = "Validation failed!";
      state.validatedSuccess = false;
    },
    setCleanMessegesArguments: (state) => {
      state.message = "";
    },
  },
});

export const {
  addAddress,
  setAddresses,
  setMessageWhenValidationSucceded,
  setMessageWhenValidationFailed,
  setCleanMessegesArguments,
} = addressesSlice.actions;

export const setMessageSuccess = () => (dispatch) => {
  console.log("sldkfj");
  dispatch(reducers.setMessageWhenValidationSucceded());
  setTimeout(() => {
    dispatch(reducers.setCleanMessegesArguments());
  }, 4000);
};

export const setMessageFailed = () => (dispatch) => {
  dispatch(reducers.setMessageWhenValidationFailed());
  setTimeout(() => {
    dispatch(reducers.setCleanMessegesArguments());
  }, 4000);
};

export const selectAddresses = (state) => state.addresses.addresses;
export const selectValidatedSuccess = (state) =>
  state.addresses.validatedSuccess;
export const selectMessage = (state) => state.addresses.message;

export default addressesSlice.reducer;
