import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { IRestaurants } from "../../interfaces/IRestaurants";
import { api } from "../../utils/api";
import { RestaurantList } from "../../containers/RestaurantList";

export const Home = () => {
  const [restaurants, setRestaurants] = useState<IRestaurants[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getRestaurants = async () => {
      const response = await api.get("/restaurantes");
      setRestaurants(response.data);
      setIsLoading(false);
    };

    getRestaurants();
  }, []);

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
      <RestaurantList restaurants={restaurants} />
      <Footer />
    </>
  );
};
