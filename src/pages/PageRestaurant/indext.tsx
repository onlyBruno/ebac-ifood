import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { DishList } from "../../containers/DishList";

import { RootReducer } from "../../store";

import { useGetRestaurantsQuery } from "../../services/api";

export const RestaurantPage = () => {
  const { data, isLoading } = useGetRestaurantsQuery();
  const { id } = useParams();

  const { items } = useSelector((state: RootReducer) => state.cart);

  const findId = data?.find((restaurant) => restaurant.id === Number(id));

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
      <DishList dishes={findId?.cardapio as IDish[]} />
      <Footer />
    </>
  );
};
