import styled from "styled-components";
import { colors } from "../../styles";
import { Container as TagContainer } from "./../Tag/styles";
import { Btn } from "../Button/styles";

export const Container = styled.div`
  color: ${colors.coral};
  position: relative;

  ${TagContainer} {
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
  background-color: ${colors.white};
  border: 1px solid ${colors.coral};
  border-top: none;
  padding: 0.5rem;

  ${Btn} {
    width: 82px;
    background-color: ${colors.coral};
    a {
      font-size: 0.875rem;
      font-weight: bold;
      text-decoration: none;
      color: ${colors.rose};

      @media (max-width: 450px) {
        font-size: 0.75rem;
      }
    }
  }

  p {
    font-size: 0.875rem;
    line-height: 1.375rem;
    margin-bottom: 16px;
    min-height: 88px;

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

export const TagsContainer = styled.div`
  display: flex;
  position: absolute;
  top: 16px;
  right: 16px;
`;
