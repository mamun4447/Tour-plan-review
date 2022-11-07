import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Description from "../pages/Description";
import Home from "../pages/Home/Home";
import Services from "../pages/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "description",
        element: <Description />,
      },
    ],
  },
]);

export default router;
