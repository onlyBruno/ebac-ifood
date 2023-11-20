import styled from "styled-components";
import { colors } from "../../styles";
import { Btn } from "../Button/styles";

type InputGroupProps = {
  width?: string;
};

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const InputGroup = styled.div<InputGroupProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;

  input {
    width: ${(props) => props.width || "100%"};
    height: 32px;
    font-size: 0.875rem;
    font-weight: 700;
    background-color: ${colors.rose};
    border: 1px solid ${colors.rose};
    margin-top: 8px;
    padding: 0.5rem;
    outline: none;

    &.error {
      border-color: red;
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormBtn = styled.div`
  margin-top: 16px;

  ${Btn} {
    margin-bottom: 8px;
  }
`;

export const ConfirmPayment = styled.div`
  p {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.375rem;
  }

  ${Btn} {
    margin-top: 24px;
  }
`;

export const SmallErrors = styled.div`
  width: 100%;
`;
