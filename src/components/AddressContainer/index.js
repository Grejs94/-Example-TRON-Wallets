import React from "react";

import * as Styles from "./styles";

import { Address } from "./components";

const AddressContainer = ({ address, wallet }) => {
  let workingWallet = wallet;
  const number = wallet.length - address;

  const newWallet = workingWallet.slice(number, wallet.length);

  console.log(newWallet);

  const AdressesList = newWallet.map((element) => (
    <Address key={element.address}>{element.address}</Address>
  ));

  return (
    <Styles.Wrapper>
      <Styles.P>Adresses in base58 format:</Styles.P>
      {AdressesList}
    </Styles.Wrapper>
  );
};

export default AddressContainer;
