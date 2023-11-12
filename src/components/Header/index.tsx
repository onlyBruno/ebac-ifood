import { Link } from "react-router-dom";

import * as S from "./style";
import { Container } from "../../styles";
import logo from "../../assets/logo.png";
import { useDispatch } from "react-redux";
import { open } from "../../store/reducers/cart";

export type Props = {
  name?: string;
  cart?: string;
  info?: string;
  banner?: JSX.Element;
  size?: "small" | "big";
};

export const Header = ({ name, cart, info, banner, size }: Props) => {
  const dispatch = useDispatch();

  const openCart = () => dispatch(open());

  return (
    <Container>
      <S.Header size={size}>
        <S.Menu>
          <Link to="/">{name}</Link>
          <Link to="/">
            <img src={logo} alt="Efood" />
          </Link>
          <span style={{ cursor: "pointer" }} onClick={openCart}>
            {cart}
          </span>
        </S.Menu>
        <S.Info>{info}</S.Info>s<S.Banner>{banner}</S.Banner>
      </S.Header>
    </Container>
  );
};
