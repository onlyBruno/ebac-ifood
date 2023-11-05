import * as S from "./styles";

type Props = {
  children?: string;
};

export const Tag = ({ children }: Props) => {
  return <S.Container>{children}</S.Container>;
};
