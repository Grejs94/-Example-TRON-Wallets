import React from "react";
import { useDispatch, useSelector } from "react-redux";

import * as Styles from "./styles";

import {
  selectAddresses,
  setAddresses,
} from "features/addresses/addressesSlice";

const Address = ({ children, id }) => {
  const addressesArray = useSelector(selectAddresses);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    let workingAddressesArray = addressesArray;
    workingAddressesArray = workingAddressesArray.filter(
      (address) => address.id !== id
    );
    dispatch(setAddresses(workingAddressesArray));
  };

  return (
    <Styles.Div>
      <Styles.ClosingIcon onClick={() => handleClick(id)}>
        &#10005;
      </Styles.ClosingIcon>
      {children}
    </Styles.Div>
  );
};

export default Address;
