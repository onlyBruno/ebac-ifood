import styled from "styled-components";
import { colors } from "../../styles";

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2.5rem;
  z-index: 2;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 auto;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
`;

export const ModalContent = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  background-color: ${colors.coral};
  padding: 2rem;
  position: relative;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const ContentImg = styled.div`
  margin-right: 24px;

  @media (max-width: 750px) {
    margin-right: 0;
  }
  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    display: block;

    @media (max-width: 750px) {
      width: 100%;
      height: 140px;
    }
  }
`;

export const InfosContent = styled.div`
  @media (max-width: 750px) {
    margin-top: 8px;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 900;
    margin-bottom: 16px;
  }
`;

export const Description = styled.div`
  height: 176px;
  margin-bottom: 16px;
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 750px) {
    height: auto;
    font-size: 0.75rem;
  }

  p {
    line-height: 1.375rem;
  }
`;

export const Button = styled.button`
  max-width: 218px;
  width: 100%;
  height: 24px;
  font-size: 0.875rem;
  font-weight: bold;
  color: ${colors.coral};
  background-color: ${colors.rose};
  border: none;
  cursor: pointer;

  @media (max-width: 350px) {
    font-size: 0.75rem;
  }
`;

export const Close = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;
