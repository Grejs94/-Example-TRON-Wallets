import styled from "styled-components";

import { media, css } from "utilis/variables";

export const Div = styled.div`
  padding: 3px 0 0 10px;
  ${media.sm} {
    ${css.md_FontSize_text}
  }

  ${media.xs} {
    ${css.xs_FontSize_text}
  }
`;

export const ClosingIcon = styled.span`
  font-size: 10px;
  margin-right: 5px;
  padding: 4px;
  cursor: pointer;
`;
