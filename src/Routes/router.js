import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../pages/AddService";
import LogIn from "../pages/Auth/LogIn";
import SignUp from "../pages/Auth/SignUp";
import Blog from "../pages/Blog";
import AddReview from "../pages/Descriptions/AddReview";
import Description from "../pages/Descriptions/Description";
import MyReviews from "../pages/Descriptions/MyReviews";
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
        path: "/services",
        element: <Services />,
      },
      {
        path: "/description",
        element: <Description />,
      },
      {
        path: "/add-service",
        element: <AddService />,
      },
      {
        path: "/add-review",
        element: <AddReview />,
      },
      {
        path: "/my-reviews",
        element: <MyReviews />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
    ],
  },
]);

export default router;
