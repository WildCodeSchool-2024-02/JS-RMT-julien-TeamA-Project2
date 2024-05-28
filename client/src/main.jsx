import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { FavProvider } from "./contexts/FavContext";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
