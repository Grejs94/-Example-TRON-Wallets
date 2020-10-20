import { configureStore } from "@reduxjs/toolkit";

import { addressesSlice as addressesReducer } from "features";

export default configureStore({
  reducer: {
    addresses: addressesReducer,
  },
});
