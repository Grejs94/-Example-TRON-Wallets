import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px 30px;
  font-size: 14px;

  @media (max-width: 800px) {
    padding: 10px 2px;
  }

  @media (max-width: 600px) {
    padding: 0;
  }
`;
