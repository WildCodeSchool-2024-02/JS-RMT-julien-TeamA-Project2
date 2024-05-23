import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Moviepage from "./pages/Moviepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/movies/:id",
    element: <Moviepage />,
    loader: async ({ params }) => {
      const res = await axios.get(
        `http://localhost:3310/api/movies/${params.id}`
      );
      return res.data;
    },
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
