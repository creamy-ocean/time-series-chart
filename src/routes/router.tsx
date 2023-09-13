import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ChartPage from "../pages/ChartPage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ChartPage />,
      },
    ],
  },
]);

export default router;
