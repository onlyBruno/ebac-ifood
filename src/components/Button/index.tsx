import { ReactNode } from "react";
import * as S from "./styles";

type Props = {
  children: ReactNode;
  onClick?: () => void;
};

export const Button = ({ children, onClick }: Props) => {
  return <S.Btn onClick={onClick}>{children}</S.Btn>;
};
