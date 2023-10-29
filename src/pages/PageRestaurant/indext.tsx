import { useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { RestaurantList } from "../../containers/RestaurantList";
import { restaurants } from "../../api/restaurants";
import { Banner } from "../../components/Banner";
import DishModel from "../../models/DishModel";
import { dishes } from "../../api/dishes";

export const RestaurantPage = () => {
  const { id } = useParams();

  const findId = dishes.find((restaurant) => restaurant.id === Number(id));

  return (
    <>
      <Header
        name="Restaurantes"
        cart="0 produto(s) no carrinho"
        size="big"
        banner={<Banner infos={findId as DishModel} />}
      />
      <RestaurantList restaurants={restaurants} />
      <Footer />
    </>
  );
};
