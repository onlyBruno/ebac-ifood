import styled from "styled-components";
import { colors } from "../../styles";

export const ContainerSidebar = styled.aside`
  max-width: 360px;
  width: 100%;
  height: 100%;
  background-color: ${colors.coral};
  color: ${colors.rose};
  padding: 2rem 0.5rem;
  z-index: 2;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.rose};
    border-left: 1px solid ${colors.coral};
    border-right: 1px solid ${colors.coral};
  }

  @media (max-width: 425px) {
    max-width: 260px;
  }
`;
