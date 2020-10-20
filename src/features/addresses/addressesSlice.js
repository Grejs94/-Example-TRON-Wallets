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
    setMessageWhenValidationRepeats: (state) => {
      state.message = "Validation failed!, address allready added.";
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
  setMessageWhenValidationRepeats,
  setCleanMessegesArguments,
} = addressesSlice.actions;

export const setMessageSuccess = () => (dispatch) => {
  dispatch(reducers.setMessageWhenValidationSucceded());
  setTimeout(() => {
    dispatch(reducers.setCleanMessegesArguments());
  }, 2000);
};

export const setMessageFailed = () => (dispatch) => {
  dispatch(reducers.setMessageWhenValidationFailed());
  setTimeout(() => {
    dispatch(reducers.setCleanMessegesArguments());
  }, 2000);
};

export const setMessagerepeats = () => (dispatch) => {
  dispatch(reducers.setMessageWhenValidationRepeats());
  setTimeout(() => {
    dispatch(reducers.setCleanMessegesArguments());
  }, 2000);
};

export const selectAddresses = (state) => state.addresses.addresses;
export const selectValidatedSuccess = (state) =>
  state.addresses.validatedSuccess;
export const selectMessage = (state) => state.addresses.message;

export default addressesSlice.reducer;
