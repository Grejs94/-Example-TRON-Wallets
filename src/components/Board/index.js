import React from "react";

import { useSelector } from "react-redux";

import { Row } from "./components";

import * as Styles from "./styles";

import {
  selectWallets,
  selectWalletsAllStatus,
} from "features/wallets/walletsSlice";

const Board = () => {
  const walletsAllStatus = useSelector(selectWalletsAllStatus);

  const wallets = useSelector(selectWallets);

  const CreateAddressesRows = () =>
    wallets.map((item) => (
      <Row
        key={item.address}
        first={item.address ? item.address : "unnown"}
        second={item.balance ? item.balance : "unnown"}
        third={item.create_time ? item.create_time : "unnown"}
        fourth={
          item.latest_opration_time ? item.latest_opration_time : "unnown"
        }
      />
    ));

  return walletsAllStatus === "succeded" ? (
    <Styles.Wrapper>
      <Styles.Title>Board</Styles.Title>
      <Styles.RowsContainer>
        <Row
          first="address"
          second="balance"
          third="create_time"
          fourth="latest_opration_time"
          variant="title"
        />
        <CreateAddressesRows />
      </Styles.RowsContainer>
    </Styles.Wrapper>
  ) : (
    ""
  );
};

export default Board;
