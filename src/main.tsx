import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux/es/exports";
import router from "./App";
import { GlobalCss } from "./styles";
import { Cart } from "./components/Cart";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalCss />
      <RouterProvider router={router} />
      <Cart />
    </Provider>
  </React.StrictMode>
);
