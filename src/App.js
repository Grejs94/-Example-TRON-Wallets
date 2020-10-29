import React from "react";

import {
  AddressContainer,
  FormComponent,
  Board,
  WorkingWalletsComponent,
} from "components";

import * as Styles from "./styles";

function App() {
  return (
    <Styles.Wrapper className="App">
      <WorkingWalletsComponent />
      <Board />
      <FormComponent />
      <AddressContainer />
    </Styles.Wrapper>
  );
}

export default App;
