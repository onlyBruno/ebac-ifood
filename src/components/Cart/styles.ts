import styled from "styled-components";
import { colors } from "../../styles";

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
`;

export const CartContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  align-items: center;
  justify-content: flex-end;
  z-index: 2;

  &.is-open {
    display: flex;
  }
`;

export const Sidebar = styled.aside`
  max-width: 360px;
  width: 100%;
  height: 100%;
  background-color: ${colors.coral};
  padding: 2rem 0.5rem;
  z-index: 2;

  @media (max-width: 425px) {
    max-width: 260px;
  }
`;

export const Items = styled.li`
  display: flex;
  background-color: ${colors.rose};
  margin-bottom: 16px;
  padding: 0.5rem 0 0.75rem 0.5rem;
  position: relative;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 8px;
`;

export const Infos = styled.div`
  color: ${colors.coral};

  h3 {
    font-size: 1.125rem;
    font-weight: 900;
    margin-bottom: 16px;

    @media (max-width: 425px) {
      font-size: 0.875rem;
    }
  }

  span {
    font-size: 0.875rem;

    @media (max-width: 425px) {
      font-size: 0.75rem;
    }
  }

  button {
    position: absolute;
    bottom: 8px;
    right: 8px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const TotalPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.875rem;
  font-weight: 700;
  color: ${colors.rose};
  margin-top: 40px;
  margin-bottom: 16px;
`;
