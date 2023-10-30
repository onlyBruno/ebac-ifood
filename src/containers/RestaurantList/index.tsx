import { Restaurant } from "../../components/Restaurant";
import { IRestaurants } from "../../interfaces/restaurants";
import { Container } from "../../styles";
import * as S from "./styles";

type Props = {
  restaurants: IRestaurants[];
};

export const RestaurantList = ({ restaurants }: Props) => {
  return (
    <Container>
      <S.Container>
        <S.List>
          {restaurants.map((restaurant) => (
            <Restaurant
              key={restaurant.id}
              img={restaurant.img}
              title={restaurant.title}
              description={restaurant.description}
            />
          ))}
        </S.List>
      </S.Container>
    </Container>
  );
};
