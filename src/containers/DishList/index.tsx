import { Container } from "../../styles";
import * as S from "./styles";
import { IRestaurants } from "../../interfaces/IRestaurants";
import { Dish } from "../../components/Dish";

type Props = {
  dishes: IRestaurants[] | undefined;
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
