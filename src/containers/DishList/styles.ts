import styled from "styled-components";
import { colors } from "../../styles";

export const DishContainer = styled.main`
  background-color: ${colors.cream};
  padding: 5rem 2.5rem 7.5rem 2.5rem;
`;

export const List = styled.main`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem 5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
