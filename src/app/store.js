import { configureStore } from "@reduxjs/toolkit";

import {
  addressesSlice as addressesReducer,
  walletsSlice as walletsReducer,
} from "features";

export default configureStore({
  reducer: {
    addresses: addressesReducer,
    wallets: walletsReducer,
  },
});
