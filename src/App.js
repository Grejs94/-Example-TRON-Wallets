import React from "react";

import {
  AddressContainer,
  FormComponent,
  CorrectAddresses,
  Board_new,
} from "components";

import * as Styles from "./styles";

function App() {
  return (
    <Styles.Wrapper className="App">
      <Board_new />
      <FormComponent />
      <AddressContainer />
      <CorrectAddresses />
    </Styles.Wrapper>
  );
}

export default App;
