import React from "react";

import { Button } from "./components";

import * as Styles from "./styles";

const ButtonsContainer = ({ handleAddAdress, handleRemoveAdress }) => {
  return (
    <Styles.ButtonContainer>
      <Button handleClick={handleAddAdress}>add address</Button>
      <Button handleClick={handleRemoveAdress}>remove address</Button>
    </Styles.ButtonContainer>
  );
};

export default ButtonsContainer;
