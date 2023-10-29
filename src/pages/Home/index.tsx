import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { DishList } from "../../containers/DishList";
import { dishes } from "../../api/dishes";

export const Home = () => {
  return (
    <>
      <Header info="Viva experiências gastronômicas no conforto da sua casa" />
      <DishList dishes={dishes} />
      <Footer />
    </>
  );
};
