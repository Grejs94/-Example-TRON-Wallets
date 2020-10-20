import React from "react";

import * as Styles from "./styles";

import { AddressContainer, FormComponent } from "components";

function App() {
  return (
    <Styles.Wrapper className="App">
      <FormComponent />
      <AddressContainer />
    </Styles.Wrapper>
  );
}

export default App;
