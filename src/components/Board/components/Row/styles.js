import styled from "styled-components";

export const Div = styled.div`
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  display: flex;

  div:nth-child(1) {
    flex: 2;
  }
  div:nth-child(2) {
    flex: 1;
  }
  div:nth-child(3) {
    flex: 1;
  }
  div:nth-child(4) {
    flex: 1;
  }
`;

export const Cell = styled.div``;

export const Span = styled.span`
  @media (max-width: 960px) {
    font-size: 10px;
  }
`;
