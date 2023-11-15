import { Restaurant } from "../../components/Restaurant";

import { Container } from "../../styles";
import * as S from "./styles";

export type Props = {
  restaurants?: IRestaurants[];
};

export const RestaurantList = ({ restaurants }: Props) => {
  if (!restaurants) {
    return <h1>Carregando...</h1>;
  }

  return (
    <Container>
      <S.Container>
        <S.List>
          {restaurants.map((restaurant) => (
            <Restaurant
              key={restaurant.id}
              id={restaurant.id}
              capa={restaurant.capa}
              titulo={restaurant.titulo}
              avaliacao={restaurant.avaliacao}
              descricao={restaurant.descricao}
              tipo={restaurant.tipo}
              destacado={restaurant.destacado}
            />
          ))}
        </S.List>
      </S.Container>
    </Container>
  );
};
