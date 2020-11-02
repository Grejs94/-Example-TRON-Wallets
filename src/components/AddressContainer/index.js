import React from "react";
import { useSelector } from "react-redux";

import { Address } from "./components";
import * as Styles from "./styles";
import { selectAddresses } from "features/addresses/addressesSlice";

const AddressContainer = () => {
  const addressesArray = useSelector(selectAddresses);

  const createAddressesList = () =>
    addressesArray.map((item) => (
      <Address key={item} item={item}>
        {item}
      </Address>
    ));

  return (
    <Styles.Wrapper>
      <Styles.Title>Adresses:</Styles.Title>
      {createAddressesList()}
    </Styles.Wrapper>
  );
};

export default AddressContainer;
