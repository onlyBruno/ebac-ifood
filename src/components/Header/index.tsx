import { Link } from "react-router-dom";

import * as S from "./style";
import { Container } from "../../styles";
import logo from "../../assets/logo.png";

export type Props = {
  name?: string;
  cart?: string;
  info?: string;
  banner?: JSX.Element;
  size?: "small" | "big";
};

export const Header = ({ name, cart, info, banner, size }: Props) => {
  return (
    <Container>
      <S.Header size={size}>
        <S.Menu>
          <Link to="/">{name}</Link>
          <Link to="/">
            <img src={logo} alt="Efood" />
          </Link>
          <span>{cart}</span>
        </S.Menu>
        <S.Info>{info}</S.Info>
        <S.Banner>{banner}</S.Banner>
      </S.Header>
    </Container>
  );
};
