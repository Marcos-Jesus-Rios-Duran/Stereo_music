import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Cursos from "./pages/Cursos";
import Nosotros from "./pages/Nosotros";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "cursos",
        Component: Cursos,
        handle: {
          breadcrumb: "Cursos",
        },
      },
      {
        path: "nosotros",
        Component: Nosotros,
        handle: {
          breadcrumb: "Nosotros",
        },
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);
