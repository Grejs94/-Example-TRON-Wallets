import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(0.5),
  },
  input: {
    fontSize: "30px !important",
  },
}));

const StyledContainer = styled.div`
  @media (max-width: 700px) {
    font-size: 12px;
    .MuiInputBase-input {
      font-size: 12px;
    }
  }

  @media (max-width: 600px) {
    font-size: 8px;
    .MuiInputBase-input {
      font-size: 8px;
    }
  }

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      @media (max-width: 500px) {
        max-width: 140px;
        overflow: hidden;
        padding: 0.1rem;
      }

      @media (max-width: 350px) {
        max-width: 80px;
      }

      :last-child {
        border-right: 0;
      }
    }
  }
`;

export const Styles = {
  StyledContainer,
};
