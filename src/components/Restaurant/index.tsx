import star from "../../assets/star.png";
import { Tag } from "../Tag";
import * as S from "./styles";
import { IRestaurants } from "../../interfaces/IRestaurants";
import { getDescription } from "../../utils/getDescription";

export const Restaurant = ({
  avaliacao,
  capa,
  descricao,
  id,
  tipo,
  titulo,
  destacado,
}: IRestaurants) => {
  return (
    <S.Container>
      <S.Cover src={capa} alt={titulo} />
      <S.InfosContainer>
        <S.TitleRatingContainer>
          <h2>{titulo}</h2>
          <S.Rating>
            <span>{avaliacao}</span>
            <img src={star} alt="Estrela" />
          </S.Rating>
        </S.TitleRatingContainer>
        <p>{getDescription(descricao, 250)}</p>

        <S.Button>
          <a href={`/restaurant/${id}`}>Saiba mais</a>
        </S.Button>

        <S.TagsContainer>
          {destacado ? <Tag>Destaque da semana</Tag> : null}
          <Tag>{tipo}</Tag>
        </S.TagsContainer>
      </S.InfosContainer>
    </S.Container>
  );
};
