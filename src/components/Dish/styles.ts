import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  color: ${colors.rose};
  background-color: ${colors.coral};
  padding: 0.5rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 167px;
  display: block;
  object-fit: cover;
`;

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: 900;
  margin-top: 8px;
`;

export const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.375rem;
  font-weight: 400;
  margin: 8px 0;
  min-height: 88px;

  @media (max-width: 375px) {
    font-size: 0.75rem;
    line-height: 1rem;
  }
`;
