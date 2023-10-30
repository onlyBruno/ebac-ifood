import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.main`
  background-color: ${colors.cream};
  padding: 3.5rem 2.5rem 7.5rem 2.5rem;
`;

export const List = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
