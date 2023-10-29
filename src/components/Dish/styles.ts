import styled from "styled-components";
import { colors } from "../../styles";
import { TagContainer } from "../Tag/styles";

export const DishContainer = styled.div`
  color: ${colors.coral};
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }

  img {
    width: 100%;
  }
`;

export const InfosContainer = styled.div`
  border: 1px solid ${colors.coral};
  border-top: none;
  padding: 0.5rem;

  p {
    font-size: 0.875rem;
    margin-bottom: 16px;
    max-height: 88px;

    @media (max-width: 450px) {
      font-size: 0.75rem;
    }
  }
`;

export const TitleRatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 16px;

  @media (max-width: 450px) {
    font-size: 0.875rem;
  }

  @media (max-width: 375px) {
    font-size: 0.75rem;
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
  flex-direction: row-reverse;
  top: 16px;
  right: 16px;
`;
