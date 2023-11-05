import styled from "styled-components";
import { colors } from "../../styles";
import * as S from "../Tag/styles";

export const Container = styled.div`
  color: ${colors.coral};
  position: relative;

  ${S.Container} {
    margin-right: 8px;
  }

  img {
    display: block;
    width: 100%;
  }
`;

export const Cover = styled.img`
  height: 217px;
  object-fit: cover;
`;

export const InfosContainer = styled.div`
  border: 1px solid ${colors.coral};
  border-top: none;
  padding: 0.5rem;

  p {
    height: 88px;
    font-size: 0.875rem;
    line-height: 1.375rem;
    margin-bottom: 16px;

    @media (max-width: 450px) {
      font-size: 0.75rem;
      line-height: 1rem;
    }

    @media (max-width: 375px) {
      font-size: 0.625rem;
    }
  }
`;

export const TitleRatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  margin-bottom: 16px;
  font-size: 1.125rem;

  h2 {
    font-size: 1.125rem;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`;

export const Button = styled.button`
  background-color: ${colors.coral};
  border: none;
  padding: 0.25rem 0.375rem;

  a {
    font-size: 0.875rem;
    font-weight: bold;
    text-decoration: none;
    color: ${colors.white};

    @media (max-width: 450px) {
      font-size: 0.75rem;
    }
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  position: absolute;
  top: 16px;
  right: 16px;
`;
