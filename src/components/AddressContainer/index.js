import React from "react";
import { useSelector } from "react-redux";

import { Address } from "./components";

import * as Styles from "./styles";

import { selectAddresses } from "features/addresses/addressesSlice";

const AddressContainer = () => {
  const addressesArray = useSelector(selectAddresses);

  const AdressesList = addressesArray.map((item) => (
    <Address key={item}>{item}</Address>
  ));

  return (
    <Styles.Wrapper>
      <Styles.P>Adresses:</Styles.P>
      {AdressesList}
    </Styles.Wrapper>
  );
};

export default AddressContainer;
