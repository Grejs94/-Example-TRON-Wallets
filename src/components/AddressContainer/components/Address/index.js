import React from "react";
import { useDispatch, useSelector } from "react-redux";

import * as Styles from "./styles";

import {
  selectAddresses,
  setAddresses,
} from "features/addresses/addressesSlice";

const Address = ({ children, item }) => {
  const dispatch = useDispatch();
  const addressesArray = useSelector(selectAddresses);

  const handleClick = (item) => {
    const newAddressesArray = [...addressesArray].filter(
      (element) => element !== item
    );
    dispatch(setAddresses(newAddressesArray));
  };

  return (
    <Styles.Div>
      <Styles.ClosingIcon onClick={() => handleClick(item)}>
        &#10005;
      </Styles.ClosingIcon>
      {children}
    </Styles.Div>
  );
};

export default Address;
