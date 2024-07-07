import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import RootLayout from "./components/RootLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [{ index: true, element: <ProductPage /> }],
  },

  {
    path: "cart",
    element: <RootLayout />,
    children: [{ index: true, element: <CartPage /> }],
  },

  {
    path: "checkout",
    element: <RootLayout />,
    children: [{ index: true, element: <CheckoutPage /> }],
  },
]);

export default routes;
