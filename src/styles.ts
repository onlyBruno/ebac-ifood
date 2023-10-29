import styled, { createGlobalStyle } from "styled-components";

export const colors = {
  coral: "#E66767",
  rose: "#FFEBD9",
  cream: "#FFF8F2",
  white: "#FFFFFF",
};

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }
`;

export const Container = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
`;
