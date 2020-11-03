import { createSlice } from "@reduxjs/toolkit";

import API from "../../API";

import * as Wallet from "features/wallets/walletsSlice";

export const walletsSlice = createSlice({
  name: "wallets",
  initialState: {
    status: "iddle",
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
    setData: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    clearSortedData: (state) => {
      state.sorted = [];
    },
    fetchStarted: (state) => {
      state.status = "inProgress";
    },
    fetchSucceded: (state) => {
      state.status = "succeded";
    },
    fetchFailed: (state) => {
      state.status = "failed";
    },
    setSortedData: (state, action) => {
      state.sorted = action.payload;
    },
    setFilterData: (state, action) => {
      state.filter = action.payload;
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
  fetchStarted,
  fetchSucceded,
  fetchFailed,
  setSortedData,
  setFilterStatusTrue,
  setFilterStatusFalse,
  setFilterData,
  toggleSortedAscending,
} = walletsSlice.actions;

export const fetchAllWallets = (addresses) => async (dispatch) => {
  dispatch(clearData());

  addresses.forEach((address) => {
    dispatch(Wallet.fetchSingleWallet(address));
  });
};

export const fetchSingleWallet = (wallet) => async (dispatch) => {
  dispatch(fetchStarted());
  try {
    const data = await API.wallet.fetchWallet(wallet);
    dispatch(setData(data));
    dispatch(fetchSucceded());
  } catch (error) {
    dispatch(fetchFailed());
  }
};

export const selectWalletsAll = (state) => state.wallets;

export default walletsSlice.reducer;
