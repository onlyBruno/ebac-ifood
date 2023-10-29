import { Restaurant } from "../../components/Restaurant";
import RestaurantModel from "../../models/RestaurantModel";
import { Container } from "../../styles";
import { ContainerDish, List } from "./styles";

type Restaurants = {
  restaurants: RestaurantModel[];
};

export const RestaurantList = ({ restaurants }: Restaurants) => {
  return (
    <Container>
      <ContainerDish>
        <List>
          {restaurants.map((restaurant) => (
            <Restaurant
              key={restaurant.id}
              img={restaurant.img}
              title={restaurant.title}
              description={restaurant.descrition}
            />
          ))}
        </List>
      </ContainerDish>
    </Container>
  );
};
