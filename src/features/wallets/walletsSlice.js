import { createSlice } from "@reduxjs/toolkit";

import API from "../../API";

import * as Wallet from "features/wallets/walletsSlice";
import { clearAddress } from "features/addresses/addressesSlice";

export const walletsSlice = createSlice({
  name: "wallets",
  initialState: {
    allstatus: "iddle",
    singlestatus: "iddle",
    data: [],
    sortedData: [],
  },
  reducers: {
    clearData: (state) => {
      state.data = [];
    },
    fetchAllStarted: (state) => {
      state.allstatus = "inProgress";
    },
    fetchSingleWalletStarted: (state) => {
      state.singlestatus = "inProgress";
    },
    fetchSingleSucceded: (state, action) => {
      let newData = state.data;
      newData.push(action.payload);
      state.data = newData;
      state.singlestatus = "succeded";
    },
    fetchAllSucceded: (state) => {
      state.allstatus = "succeded";
    },
    fetchSingleFailed: (state) => {
      state.singlestatus = "failed";
    },
    fetchAllFailed: (state) => {
      state.allstatus = "failed";
    },
  },
});

export const {
  clearData,
  fetchAllStarted,
  fetchSingleWalletStarted,
  fetchAllSucceded,
  fetchSingleSucceded,
  fetchAllFailed,
  fetchSingleFailed,
} = walletsSlice.actions;

export const fetchAllWallets = (addresses) => async (dispatch) => {
  dispatch(clearData());
  dispatch(fetchAllStarted());
  dispatch(clearAddress());

  addresses.forEach((address) => {
    dispatch(Wallet.fetchSingleWallet(address.address));
  });

  dispatch(fetchAllSucceded());
};

export const fetchSingleWallet = (wallet) => async (dispatch) => {
  dispatch(fetchSingleWalletStarted());
  try {
    const data = await API.wallet.fetchWallet(wallet);
    dispatch(fetchSingleSucceded(data));
  } catch (error) {
    dispatch(fetchSingleFailed());
    dispatch(fetchAllFailed());
  }
};

export const selectWallets = (state) => state.wallets.data;
export const selectWalletsSortedData = (state) => state.wallets.sortedData;
export const selectWalletsAllStatus = (state) => state.wallets.allstatus;

export default walletsSlice.reducer;