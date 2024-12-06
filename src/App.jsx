// rrd import
import { createBrowserRouter, RouterProvider } from "react-router";

// layouts
import MainLayout from "./layouts/MainLayout";

//pages
import {
  About,
  Cart,
  Home,
  Contact,
  Login,
  Register,
  SingleProduct,
} from "./pages";

import { loader as HomeLoader } from "./pages/Home";
import { loader as SingleProductLoader } from "./pages/SingleProduct";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: HomeLoader,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/singleproduct/:id",
          element: <SingleProduct />,
          loader: SingleProductLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
