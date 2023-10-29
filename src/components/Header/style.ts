import styled from "styled-components";
import { colors } from "../../styles";
import { Props } from ".";

export const HeaderContainer = styled.header<Props>`
  height: ${(props) => (props.size === "big" ? "466px" : "384px")};
  background-color: ${colors.rose};
  padding: 40px 171px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: ${colors.coral};
  position: relative;

  @media (max-width: 768px) {
    padding: 40px;
  }
`;

export const Info = styled.h1`
  max-width: 539px;
  width: 100%;
  text-align: center;
  font-size: 36px;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Menu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.125rem;
  font-weight: 900;

  a {
    text-decoration: none;
    color: ${colors.coral};
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Banner = styled.div`
  width: 100%;
  position: absolute;
  top: 192px;
  left: 0;
`;
