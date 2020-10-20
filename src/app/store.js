import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

import {
  addressesSlice as addressesReducer,
  walletSlice as walletReducer,
} from "features";

export default configureStore({
  reducer: {
    counter: counterReducer,
    wallet: walletReducer,
    addresses: addressesReducer,
  },
});
