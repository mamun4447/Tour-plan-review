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
import PrivateRoute from "../pages/PrivateRoute";
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
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/services/:id",
        element: <Description />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/add-service",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-review",
        element: (
          <PrivateRoute>
            <AddReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-reviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
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
