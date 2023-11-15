import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { RestaurantList } from "../../containers/RestaurantList";

import { useGetRestaurantsQuery } from "../../services/api";

export const Home = () => {
  const { data, isLoading } = useGetRestaurantsQuery();

  if (isLoading) {
    return (
      <div>
        <h1>Carregando...</h1>
      </div>
    );
  }

  return (
    <>
      <Header info="Viva experiências gastronômicas no conforto da sua casa" />
      <RestaurantList restaurants={data} />
      <Footer />
    </>
  );
};
