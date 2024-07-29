/* eslint-disable */
import { lazy } from "react";

const Home = lazy(() => import("@pages/Home/Home"));
const Login = lazy(() => import("@pages/Login/Login"));
const Category = lazy(() => import("@pages/Category/Category"));
const Users = lazy(() => import("@pages/Users/Users"));
const Cart = lazy(() => import("@pages/Cart/Cart"));
const ViewPorduct = lazy(() => import("@pages/ViewPorduct/ViewPorduct"));

export const protectedRoutes = [
  { path: "/", element: <Home /> },
  { path: "/products", element: <Home /> },
  { path: "/category", element: <Category /> },
  { path: "/users", element: <Users /> },
  { path: "/cart", element: <Cart /> },
  { path: "/products/:id", element: <ViewPorduct /> },
];

export const publicRouts = [{ path: "login", element: <Login /> }];
