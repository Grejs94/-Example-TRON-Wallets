import { createSlice } from "@reduxjs/toolkit";

import API from "../../API";

import * as Wallet from "features/wallets/walletsSlice";

export const walletsSlice = createSlice({
  name: "wallets",
  initialState: {
    allstatus: "iddle",
    singlestatus: "iddle",
    filterStatus: false,
    data: [],
    sorted: [],
    filter: [],
    sortedAscending: true,
  },
  reducers: {
    toggleSortedAscending: (state) => {
      state.sortedAscending = !state.sortedAscending;
    },
    clearData: (state) => {
      state.data = [];
    },
    clearSortedData: (state) => {
      state.sorted = [];
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
    setData: (state, action) => {
      state.data = action.payload;
    },
    setSortedData: (state, action) => {
      state.sorted = action.payload;
    },
    setFilterData: (state, action) => {
      state.filterData = action.payload;
    },
    setFilterStatusTrue: (state) => {
      state.filterStatus = true;
    },
    setFilterStatusFalse: (state) => {
      state.filterStatus = false;
    },
  },
});

export const {
  setData,
  clearData,
  clearSortedData,
  fetchAllStarted,
  fetchSingleWalletStarted,
  fetchAllSucceded,
  fetchSingleSucceded,
  fetchAllFailed,
  fetchSingleFailed,
  setSortedData,
  setFilterStatusTrue,
  setFilterStatusFalse,
  setFilterData,
  toggleSortedAscending,
} = walletsSlice.actions;

export const fetchAllWallets = (addresses) => async (dispatch) => {
  dispatch(clearData());
  dispatch(fetchAllStarted());

  addresses.forEach((address) => {
    dispatch(Wallet.fetchSingleWallet(address));
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

export const selectWalletsAll = (state) => state.wallets;

export default walletsSlice.reducer;
