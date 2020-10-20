import React from "react";

import * as Styled from "./styles";

const Button = ({ children, handleClick }) => {
  return <Styled.Button onClick={handleClick}>{children}</Styled.Button>;
};

export default Button;
