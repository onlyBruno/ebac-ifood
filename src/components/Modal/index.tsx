import * as S from "./styles";
import close from "../../assets/close.png";
import { Container } from "../../styles";
import { IDish } from "../../interfaces/IRestaurants";
import { formatPrice } from "../../utils/formatPrice";

type Props = {
  isVisible: boolean;
  handleModal: () => void;
  details: IDish | undefined;
};

export const Modal = ({ isVisible, handleModal, details }: Props) => {
  return isVisible ? (
    <Container>
      <S.Modal>
        <S.Overlay onClick={handleModal}></S.Overlay>
        <S.ModalContent>
          <S.Close
            onClick={handleModal}
            src={close}
            alt="Ícone para fechar modal"
          />
          <S.ContentImg>
            <img src={details?.foto} alt={details?.nome} />
          </S.ContentImg>
          <S.InfosContent>
            <h3>{details?.nome}</h3>
            <S.Description>
              <p>{details?.descricao}</p>
              <span>Serve: de {details?.porcao}</span>
            </S.Description>

            <S.Button>
              Adicionar ao carrinho - {formatPrice(details?.preco)}
            </S.Button>
          </S.InfosContent>
        </S.ModalContent>
      </S.Modal>
    </Container>
  ) : null;
};
