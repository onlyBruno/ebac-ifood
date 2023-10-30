import { Dish } from "../../components/Dish";
import { IDish } from "../../interfaces/dishes";
import { Container } from "../../styles";
import * as S from "./styles";

export type Props = {
  dishes: IDish[];
};

export const DishList = ({ dishes }: Props) => {
  return (
    <Container>
      <S.Container>
        <S.List>
          {dishes.map((dish) => (
            <Dish
              key={dish.id}
              id={dish.id}
              img={dish.img}
              title={dish.title}
              rating={dish.rating}
              description={dish.description}
              tags={dish.tags}
            />
          ))}
        </S.List>
      </S.Container>
    </Container>
  );
};
