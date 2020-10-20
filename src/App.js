import React from "react";

import { AddressContainer, FormComponent, Board } from "components";

import * as Styles from "./styles";

function App() {
  return (
    <Styles.Wrapper className="App">
      <Board />
      <FormComponent />
      <AddressContainer />
    </Styles.Wrapper>
  );
}

export default App;
