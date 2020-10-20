import React from "react";

import * as Styles from "./styles";

const Row = ({ first, second, third, fourth, variant }) => {
  const titleVariant = (
    <Styles.Div>
      <Styles.Cell>{first}</Styles.Cell>
      <Styles.Cell>{second}</Styles.Cell>
      <Styles.Cell>{third}</Styles.Cell>
      <Styles.Cell>{fourth}</Styles.Cell>
    </Styles.Div>
  );

  const normalVariant = (
    <Styles.Div>
      <Styles.Cell>
        <Styles.Span>{first}</Styles.Span>
      </Styles.Cell>
      <Styles.Cell>
        <Styles.Span>{second}</Styles.Span>
      </Styles.Cell>
      <Styles.Cell>
        <Styles.Span>{third}</Styles.Span>
      </Styles.Cell>
      <Styles.Cell>
        <Styles.Span>{fourth}</Styles.Span>
      </Styles.Cell>
    </Styles.Div>
  );

  return variant ? titleVariant : normalVariant;
};

export default Row;
