import React from "react";

import {
  AddressContainer,
  FormComponent,
  CorrectAddresses,
  Board,
} from "components";

import * as Styles from "./styles";

function App() {
  return (
    <Styles.Wrapper>
      <Board />
      <FormComponent />
      <AddressContainer />
      <CorrectAddresses />
    </Styles.Wrapper>
  );
}

export default App;
