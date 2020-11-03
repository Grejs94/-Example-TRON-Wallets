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
}));

const StyledContainer = styled.div`
  overflow: hidden;

  @media (max-width: 800px) {
    font-size: 12px;
    .MuiInputBase-input {
      font-size: 14px;
      // background-color: red;
    }
  }

  @media (max-width: 600px) {
    .MuiInputBase-input {
      margin-top: 10px;
    }
  }

  table {
    border-spacing: 0;
    border: 1px solid black;

    thead {
      tr:first-child {
        th {
          @media (max-width: 600px) {
            padding: 0;
          }
        }

      }

      
    }

    

      td:first-child {
        // background-color: red;
        overflow: hidden;
        padding: 0.1rem;

        @media (max-width: 700px) {
          max-width: 200px;
        }

        @media (max-width: 500px) {
          max-width: 140px;
        }

        @media (max-width: 400px) {
          max-width: 80px;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }

      @media (max-width: 500px) {
        max-width: 140px;
        overflow: hidden;
        padding: 0;
      }

      @media (max-width: 400px) {
        max-width: 120px;
      }
    }
  }
`;

export const Styles = {
  StyledContainer,
};
