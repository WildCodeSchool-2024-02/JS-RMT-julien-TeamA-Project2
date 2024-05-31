import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { FavProvider } from "./contexts/FavContext";
import App from "./App";
import Moviepage from "./pages/Moviepage";
import ContactPage from "./pages/ContactPage"
import FavoritesPage from "./pages/FavoritesPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () =>
      axios.get(`${import.meta.env.VITE_API_URL}/api/movies`).then((res) => res.data),
  },
  {
    path: "/movies/:id",
    element: <Moviepage />,
    errorElement : <ErrorPage />,
    loader: async ({ params }) => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/movies/${params.id}`
      );
      if (res.status === 404) {
        throw new Response("Not Found", { status: 404 });
      }
      return res.data;
    },
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
    path: "/contact",
    element: <ContactPage />,
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
