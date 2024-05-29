import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { FavProvider } from "./contexts/FavContext";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () =>
      axios.get("http://localhost:3310/api/movies").then((res) => res.data),
  },
  {
    path: "/movie",
    element: <App />,
  },
  {
    path: "/favorite",
    element: <App />,
  },
  {
    path: "/contactform",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <FavProvider>
      <RouterProvider router={router} />
    </FavProvider>
  </React.StrictMode>
);
