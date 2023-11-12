import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { IRestaurants } from "../../interfaces/IRestaurants";
import { api } from "../../utils/api";
import { DishList } from "../../containers/DishList";
import { useSelector } from "react-redux";
import { RootReducer } from "../../store";

export const RestaurantPage = () => {
  const [restaurants, setRestaurants] = useState<IRestaurants[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const { items } = useSelector((state: RootReducer) => state.cart);

  useEffect(() => {
    const getMenu = async () => {
      const response = await api.get("/restaurantes");
      setRestaurants(response.data);
      setIsLoading(false);
    };

    getMenu();
  }, []);

  const findId = restaurants.find((restaurant) => restaurant.id === Number(id));

  if (isLoading) {
    return (
      <div>
        <h1>Carregando...</h1>
      </div>
    );
  }

  return (
    <>
      <Header
        name="Restaurantes"
        cart={`${items.length} produto(s) no carrinho`}
        size="big"
        banner={<Banner infos={findId as IRestaurants} />}
      />
      <DishList dishes={findId?.cardapio} />
      <Footer />
    </>
  );
};
