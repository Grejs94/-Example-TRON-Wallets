import React from "react";

import { useSelector } from "react-redux";

import { Row } from "./components";

import * as Styles from "./styles";

import {
  selectWallets,
  selectWalletsSortedData,
  selectWalletsAllStatus,
} from "features/wallets/walletsSlice";

const Board = () => {
  const walletsAllStatus = useSelector(selectWalletsAllStatus);

  const wallets = useSelector(selectWallets);
  const walletsSorted = useSelector(selectWalletsSortedData);

  const data = walletsSorted.lenght > 0 ? walletsSorted : wallets;

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

  return walletsAllStatus === "succeded" ? (
    <Styles.Wrapper>
      <Styles.Title>Board</Styles.Title>
      <Styles.RowsContainer>
        <Row
          propsArray={["address", "balance", "created", "latest opr."]}
          variant="Description row with filters"
        />
        <CreateAddressesRows />
      </Styles.RowsContainer>
    </Styles.Wrapper>
  ) : (
    ""
  );
};

export default Board;
