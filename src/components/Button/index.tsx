import { ReactNode } from "react";

import * as S from "./styles";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
};

export const Button = ({ children, type, onClick }: Props) => {
  return (
    <S.Btn type={type} onClick={onClick}>
      {children}
    </S.Btn>
  );
};
