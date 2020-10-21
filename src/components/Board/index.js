import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { Row } from "./components";
import * as Styles from "./styles";
import {
  selectWallets,
  selectWalletsSortedData,
  selectWalletsFilterData,
  selectWalletsFilterString,
  selectWalletsAllStatus,
  setFilterString,
} from "features/wallets/walletsSlice";

const Board = () => {
  const dispatch = useDispatch();
  const walletsAllStatus = useSelector(selectWalletsAllStatus);

  const wallets = useSelector(selectWallets);
  const walletsSorted = useSelector(selectWalletsSortedData);
  const walletsFiltred = useSelector(selectWalletsFilterData);
  const walletsFilterString = useSelector(selectWalletsFilterString);

  const data =
    walletsFiltred.length > 0
      ? walletsFiltred
      : walletsSorted.length > 0
      ? walletsSorted
      : wallets;

  const filterBoard = (wallets, walletsFilterString) => {
    const filterQuery = {
      address: walletsFilterString,
      balance: walletsFilterString,
      create_time: walletsFilterString,
      latest_opration_time: walletsFilterString,
    };

    const filtredWallets = wallets.filter((item) =>
      Object.keys(filterQuery).every((key) => item[key] === filterQuery[key])
    );
    console.log(filtredWallets);
  };

  filterBoard(wallets, walletsFilterString);

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
    if (e.target.value.length > 0) {
      console.log("zmieniam");
      console.log(walletsFilterString);
    } else {
      console.log("nie zmieniam");
      console.log(walletsFilterString);
    }
  };

  return walletsAllStatus === "succeded" ? (
    <Styles.Wrapper>
      <Styles.Title>Board</Styles.Title>
      <div>
        <input placeholder="search" onChange={handleChange} />
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
