import styled from "styled-components";
import { colors } from "../../styles";

export const Footer = styled.footer`
  width: 100%;
  margin: 0 auto;
  background-color: ${colors.rose};
  height: 298px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Midias = styled.div`
  display: flex;
  column-gap: 8px;
`;

export const Description = styled.p`
  max-width: 444px;
  width: 100%;
  text-align: center;
  font-size: 10px;
  color: ${colors.coral};
`;
