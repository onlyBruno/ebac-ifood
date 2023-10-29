import styled from "styled-components";
import { colors } from "../../styles";

export const BannerContainer = styled.div`
  max-width: 1366px;
  width: 100%;
  height: 280px;
  margin: 0 auto;
  font-size: 2rem;
  position: relative;
  color: ${colors.white};

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 280px;
  background-color: #000;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.3;
`;

export const Img = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
`;

export const Cooking = styled.h5`
  position: absolute;
  top: 24px;
  left: 170px;
  opacity: 0.5;
  font-weight: 100;

  @media (max-width: 600px) {
    left: 40px;
  }
`;

export const Title = styled.h3`
  position: absolute;
  bottom: 32px;
  left: 170px;
  font-weight: 900;

  @media (max-width: 600px) {
    left: 40px;
  }
`;
