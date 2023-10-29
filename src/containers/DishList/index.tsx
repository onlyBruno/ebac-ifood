import { Dish } from "../../components/Dish";
import DishModel from "../../models/DishModel";
import { Container } from "../../styles";
import { DishContainer, List } from "./styles";

export type Props = {
  dishes: DishModel[];
};

export const DishList = ({ dishes }: Props) => {
  return (
    <Container>
      <DishContainer>
        <List>
          {dishes.map((dish) => (
            <Dish
              key={dish.id}
              id={dish.id}
              img={dish.img}
              title={dish.title}
              rating={dish.rating}
              description={dish.descrition}
              tags={dish.tags}
            />
          ))}
        </List>
      </DishContainer>
    </Container>
  );
};
