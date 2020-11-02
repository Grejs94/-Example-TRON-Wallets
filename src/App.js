import React from "react";

import {
  AddressContainer,
  FormComponent,
  Board,
  CorrectAddresses,
  Board_new,
} from "components";

import * as Styles from "./styles";

function App() {
  return (
    <Styles.Wrapper className="App">
      <Board_new />
      <Board />
      <FormComponent />
      <AddressContainer />
      <CorrectAddresses />
    </Styles.Wrapper>
  );
}

export default App;
