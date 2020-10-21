import React from "react";

import * as Styles from "./styles";

import { SortIcon } from "./components";

const Row = ({ variant, propsArray }) => (
  <Styles.Div>
    {propsArray
      ? propsArray.map((singleProps) => (
          <Styles.Cell key={singleProps}>
            {variant === "Row with data" ? (
              <Styles.Span>{singleProps}</Styles.Span>
            ) : variant === "Description row with filters" ? (
              <>
                {singleProps}
                <SortIcon />
              </>
            ) : (
              ""
            )}
          </Styles.Cell>
        ))
      : ""}
  </Styles.Div>
);

export default Row;
