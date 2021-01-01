import React from "react";
import { useSelector } from "react-redux";

import { selectAddresses } from "features/addresses/addressesSlice";

import { Address } from "./components";
import * as Styles from "./styles";

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
      <p>Adresses:</p>
      {createAddressesList()}
    </Styles.Wrapper>
  );
};

export default AddressContainer;
