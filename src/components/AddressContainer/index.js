import React from "react";
import { useSelector } from "react-redux";

import { Address } from "./components";

import * as Styles from "./styles";

import { selectAddresses } from "features/addresses/addressesSlice";

const AddressContainer = () => {
  const addressesArray = useSelector(selectAddresses);

  const AdressesList = addressesArray.map((item) => {
    return (
      <Address id={item.id} key={item.id}>
        {item.address}
      </Address>
    );
  });

  return (
    <Styles.Wrapper>
      <Styles.P>Adresses:</Styles.P>
      {AdressesList}
    </Styles.Wrapper>
  );
};

export default AddressContainer;
