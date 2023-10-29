import { Description, FooterContainer, Midias } from "./styles";

import logo from "../../assets/logo.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import { Container } from "../../styles";

export const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        <img src={logo} alt="Efood" />
        <Midias>
          <img src={instagram} alt="Instagram" />
          <img src={facebook} alt="Facebook" />
          <img src={twitter} alt="Twitter" />
        </Midias>
        <Description>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </Description>
      </FooterContainer>
    </Container>
  );
};
