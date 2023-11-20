import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import logo from "../../assets/logo.png";
import twitter from "../../assets/twitter.png";

import * as S from "./styles";
import { Container } from "../../styles";

export const Footer = () => {
  return (
    <Container>
      <S.Footer>
        <img src={logo} alt="Efood" />
        <S.Midias>
          <img src={instagram} alt="Instagram" />
          <img src={facebook} alt="Facebook" />
          <img src={twitter} alt="Twitter" />
        </S.Midias>
        <S.Description>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </S.Description>
      </S.Footer>
    </Container>
  );
};
