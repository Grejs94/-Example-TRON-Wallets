import styled from "styled-components";

import { media, css } from "utilis/variables";

export const AddressItem = styled.p`
  margin: 0;

  ${media.sm} {
    ${css.md_FontSize_text}
  }

  ${media.xs} {
    ${css.xs_FontSize_text}
  }
`;
