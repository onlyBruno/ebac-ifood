import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { RestaurantPage } from "./pages/PageRestaurant/indext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/restaurant/:id",
    element: <RestaurantPage />,
  },
]);

export default router;
