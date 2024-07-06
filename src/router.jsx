import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement: <NotFoundPage />,
  },
]);

export default routes;
