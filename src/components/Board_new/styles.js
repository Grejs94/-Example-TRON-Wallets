import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

import { media, css, colors } from "utilis/variables";

export const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(0.5),
  },
}));

const StyledContainer = styled.div`
  display: block;
  max-width: 100%;

  .tableWrap {
    display: block;
    max-width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    border-bottom: 1px solid ${colors.black};
  }

  ${media.md} {
    ${css.md_FontSize}
    .MuiInputBase-input {
      ${css.md_FontSize_text}
    }
  }

  ${media.sm} {
    .MuiInputBase-input {
      margin-top: 10px;
    }
  }

  ${media.xs} {
    ${css.xs_FontSize_text}
    .MuiInputBase-input {
      ${css.xs_FontSize_text}
    }
  }

  table {
    width: 100%;
    border-spacing: 0;

    margin: 0 auto;
    border: 1px solid ${colors.black};

    thead {
      tr:first-child {
        th {
          ${media.sm} {
            .MuiInputBase-input {
              padding: 0;
            }
          }
        }
      }
    }

    td:first-child {
      overflow: hidden;

      ${media.sm} {
        max-width: 200px;
      }

      ${media.xs} {
        max-width: 100px;
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid ${colors.black};
      border-right: 1px solid ${colors.black};

      width: 1%;
      &.collapse {
        width: 0.0000000001%;
      }

      :last-child {
        border-right: 0;
      }

      ${media.md} {
        padding: 4px 0 4px 1px;
      }
    }
  }
`;

export const Styles = {
  StyledContainer,
};
