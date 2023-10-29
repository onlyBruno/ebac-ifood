import styled from "styled-components";
import { colors } from "../../styles";

export const RestaurantContainer = styled.div`
  color: ${colors.cream};
  background-color: ${colors.coral};
  padding: 0.5rem;

  img {
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 1rem;
  line-height: 1.375rem;
  font-weight: 900;
  margin-top: 8px;
`;

export const Description = styled.p`
  font-size: 0.875rem;
  margin-top: 8px;
`;

export const Button = styled.button`
  width: 100%;
  font-size: 0.875rem;
  font-weight: 700;
  color: ${colors.coral};
  padding: 0.25rem 0;
  border: none;
  cursor: pointer;
  margin-top: 8px;
`;
