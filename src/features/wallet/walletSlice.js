import { createSlice } from "@reduxjs/toolkit";

import API from "../../API";

import * as Wallet from "features/wallet/walletSlice";

export const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    allstatus: "iddle",
    singlestatus: "iddle",
    data: [],
  },
  reducers: {
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
  fetchAllStarted,
  fetchSingleWalletStarted,
  fetchAllSucceded,
  fetchSingleSucceded,
  fetchAllFailed,
  fetchSingleFailed,
} = walletSlice.actions;

export const fetchAllWallets = (wallets) => async (dispatch) => {
  dispatch(fetchAllStarted());

  wallets.forEach((wallet) => {
    dispatch(Wallet.fetchSingleWallet(wallet));
  });

  dispatch(fetchAllSucceded());
};

export const fetchSingleWallet = (wallet) => async (dispatch) => {
  dispatch(fetchSingleWalletStarted());
  try {
    const data = await API.Wallet.fetchWallet(wallet);
    dispatch(fetchSingleSucceded(data));
  } catch (error) {
    dispatch(fetchSingleFailed());
    dispatch(fetchAllFailed());
  }
};

export const selectWallet = (state) => state.wallet.data;

export default walletSlice.reducer;
