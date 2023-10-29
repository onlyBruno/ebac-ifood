import { Link } from "react-router-dom";

import { Banner, HeaderContainer, Info, Menu } from "./style";
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
      <HeaderContainer size={size}>
        <Menu>
          <Link to="/">{name}</Link>
          <img src={logo} alt="Efood" />
          <span>{cart}</span>
        </Menu>
        <Info>{info}</Info>
        <Banner>{banner}</Banner>
      </HeaderContainer>
    </Container>
  );
};
