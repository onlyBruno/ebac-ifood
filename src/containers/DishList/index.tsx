import { Dish } from "../../components/Dish";

import * as S from "./styles";
import { Container } from "../../styles";

type Props = {
  dishes: IDish[];
};

export const DishList = ({ dishes }: Props) => {
  if (!dishes) {
    return (
      <div>
        <h1>Carregando</h1>
      </div>
    );
  }

  return (
    <Container>
      <S.Container>
        <S.List>
          {dishes.map((dish) => (
            <Dish key={dish.id} item={dish} />
          ))}
        </S.List>
      </S.Container>
    </Container>
  );
};
