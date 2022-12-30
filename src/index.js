import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Gamble from "./pages/gamble/gamble";
import Home from "./pages/home/home";
import NotFound from "./pages/notFound/notFound";
import ProtectedRoute from "./pages/ProtectedRoute";
import Gambles from "./pages/gambles/gambles";
import HomeRoute from "./pages/HomeRoute";
import UserMake from "./pages/userMake/userMake";
import UserMakeRoute from "./pages/userMakeRoute";
import Snail from "./pages/gambles/snail/snail";
import Sniffling from "./pages/gambles/sniffling/sniffling";
import Roulette from "./pages/gambles/roulette/roulette";
import Graph from "./pages/gambles/graph/graph";
import SwordReinforce from "./pages/gambles/swordReinforce/swordReinforce";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: "/",
        element: (
          <HomeRoute>
            <Home />
          </HomeRoute>
        ),
      },
      {
        path: "/usermake",
        element: (
          <ProtectedRoute isUserMake>
            <UserMakeRoute>
              <UserMake />
            </UserMakeRoute>
          </ProtectedRoute>
        ),
      },
      {
        path: "/gamble",
        element: (
          <ProtectedRoute>
            <Gamble />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: <Gambles />,
          },
          {
            path: "snail",
            element: <Snail />,
          },
          {
            path: "sniffling",
            element: <Sniffling />,
          },
          {
            path: "roulette",
            element: <Roulette />,
          },
          {
            path: "graph",
            element: <Graph />,
          },
          {
            path: "swordReinforce",
            element: <SwordReinforce />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
