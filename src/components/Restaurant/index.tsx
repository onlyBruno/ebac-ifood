import { IRestaurants } from "../../interfaces/restaurants";
import * as S from "./styles";

export const Restaurant = ({
  img,
  title,
  description,
}: Omit<IRestaurants, "id">) => {
  return (
    <S.Container>
      <img src={img} alt={title} />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Button>Adicionar ao carrinho</S.Button>
    </S.Container>
  );
};
