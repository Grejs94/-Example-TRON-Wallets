import React from "react";

import * as Styles from "./styles";

const SortIcon = (handleClick) => {
  return (
    <Styles.SymbolContainer onClick={() => handleClick.handleClick()}>
      <Styles.TurnedSymbol>&gt;</Styles.TurnedSymbol>
    </Styles.SymbolContainer>
  );
};

export default SortIcon;
