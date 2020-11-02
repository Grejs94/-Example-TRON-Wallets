import { makeStyles } from "@material-ui/core/styles";

import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  margin-top: 40px;
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
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
