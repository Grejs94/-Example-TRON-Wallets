import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

import { default as walletReducer } from "features/wallet/walletSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    wallet: walletReducer,
  },
});
