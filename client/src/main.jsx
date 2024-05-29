import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { FavProvider } from "./contexts/FavContext";
import App from "./App";
import FavoritesPage from "./pages/FavoritesPage";

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
    path: "/favorites",
    element: <FavoritesPage />,
    loader: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/movies`);
      return res.data.slice(0, 3);
    },
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
