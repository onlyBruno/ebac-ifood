import * as S from "./styles";

type Props = {
  children: JSX.Element;
};

export const Sidebar = ({ children }: Props) => {
  return <S.ContainerSidebar>{children}</S.ContainerSidebar>;
};
