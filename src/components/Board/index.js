import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";

import { Row } from "./components";
import * as Styles from "./styles";
import {
  setSortedData,
  selectWalletsAll,
  setFilterStatusTrue,
  setFilterStatusFalse,
  setFilterData,
} from "features/wallets/walletsSlice";

const Board = () => {
  const dispatch = useDispatch();

  const walletsAll = useSelector(selectWalletsAll);

  const data =
    walletsAll.sorted.length > 0
      ? walletsAll.sorted
      : walletsAll.filterStatus
      ? walletsAll.filter
      : walletsAll.data;

  const filterBoard = (walletsAll, inputValue) => {
    const inputV = inputValue.toLowerCase();

    dispatch(setSortedData([]));

    if (inputV.length > 0) {
      dispatch(setFilterStatusTrue());
    } else {
      dispatch(setFilterStatusFalse());
    }

    let filtredWallets = [];

    walletsAll.forEach((wallet) => {
      let address = wallet.address;
      let balance = wallet.balance;
      let create_time = wallet.create_time;
      let latest_opration_time = wallet.latest_opration_time;

      if (typeof address !== "string") {
        address = "none";
      }

      if (typeof balance !== "number") {
        balance = "none";
      }

      if (typeof create_time !== "number") {
        create_time = "none";
      }

      if (typeof latest_opration_time !== "number") {
        latest_opration_time = "none";
      }

      const ballanceIncluded = balance.toString().includes(inputV);
      const addressIncluded = address.toString().toLowerCase().includes(inputV);
      const create_timeIncluded = create_time.toString().includes(inputV);
      const latest_opration_timeIncluded = latest_opration_time
        .toString()
        .includes(inputV);

      const IncludedTrue =
        ballanceIncluded ||
        addressIncluded ||
        create_timeIncluded ||
        latest_opration_timeIncluded;

      if (IncludedTrue) {
        filtredWallets.push(wallet);
      }
    });

    dispatch(setFilterData(filtredWallets));
  };

  const CreateAddressesRows = () =>
    data.map((item) => {
      const propsArray = [
        `${item.address ? item.address : "unnown"}`,
        `${item.balance ? item.balance : "unnown"}`,
        `${item.create_time ? item.create_time : "unnown"}`,
        `${item.latest_opration_time ? item.latest_opration_time : "unnown"}`,
      ];

      return (
        <Row
          key={item.address}
          propsArray={propsArray}
          variant="Row with data"
        />
      );
    });

  const handleChange = (e) => {
    filterBoard(walletsAll.data, e.target.value);
  };

  return walletsAll.status === "succeded" ? (
    <Styles.Wrapper>
      <Styles.Title>Board</Styles.Title>
      <div>
        <TextField
          type="search"
          placeholder="filter wallets"
          onChange={handleChange}
        />
      </div>
      <Styles.RowsContainer>
        <Row
          propsArray={["address", "balance", "created", "latest opr."]}
          variant="Description row with filters"
        />
        <CreateAddressesRows />
      </Styles.RowsContainer>
    </Styles.Wrapper>
  ) : null;
};

export default Board;
