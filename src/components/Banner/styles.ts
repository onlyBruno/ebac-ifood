import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  max-width: 1366px;
  width: 100%;
  height: 280px;
  margin: 0 auto;
  color: ${colors.white};
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 280px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem 0 2rem;

  @media (max-width: 1024px) {
    padding: 1.5rem 2.5rem 2rem;
  }
`;

export const Cooking = styled.h5`
  font-size: 2rem;
  width: 100%;
  opacity: 0.5;
  font-weight: 100;
`;

export const Title = styled.h3`
  font-size: 2rem;
  width: 100%;
  font-weight: 900;
  z-index: 1;
`;
