import { makeStyles } from "@material-ui/core/styles";

import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  margin-top: 40px;
  align-items: flex-end;
`;

export const Input = styled.input``;

export const Button = styled.button`
  margin-left: 10px;
  padding: 4px 8px;
`;

export const ValidationContainer = styled.div`
  min-height: 24px;
`;

export const ValidationMessage = styled.p`
  color: ${(props) => (props.successColor ? "green" : "red")};
`;

export const styledComponents = {
  FormContainer,
  Input,
  Button,
  ValidationContainer,
  ValidationMessage,
};

export const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    marginBottom: 0,

    [theme.breakpoints.down("xs")]: {
      fontSize: "8px",
      lineHeight: "15px",
      margin: "3px 3px 0",
    },
  },
  button_first: {
    margin: theme.spacing(1),
    marginBottom: 0,

    [theme.breakpoints.down("xs")]: {
      fontSize: "8px",
      lineHeight: "15px",
      margin: "3px 3px 0 6px",
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(0.5),
  },
  input: {
    "& .MuiInputBase-input,.MuiInputLabel-animated": {
      fontSize: "14px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "8px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "140px",
        fontSize: "12px",
      },
    },
  },
}));
