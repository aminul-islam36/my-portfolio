import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import HomePage from "../Pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [{ index: true, Component: HomePage }],
  },
]);
