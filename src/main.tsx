import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./App";
import { GlobalCss } from "./styles";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalCss />
    <RouterProvider router={router} />
  </React.StrictMode>
);
