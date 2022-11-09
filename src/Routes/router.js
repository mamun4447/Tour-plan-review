import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../pages/AddService";
import LogIn from "../pages/Auth/LogIn";
import SignUp from "../pages/Auth/SignUp";
import Blog from "../pages/Blog";
import AddReview from "../pages/Descriptions/AddReview";
import Description from "../pages/Descriptions/Description";
import MyReviews from "../pages/Descriptions/MyReviews";
import UnknownReview from "../pages/Descriptions/UnknownReview";
import UpdateReview from "../pages/Descriptions/UpdateReview";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import PrivateRoute from "../pages/PrivateRoute";
import Services from "../pages/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/services"),
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
        path: "/add-review/:id",
        element: (
          <PrivateRoute>
            <AddReview />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
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
      {
        path: "/update-review/:id",
        element: <UpdateReview />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/review/${params.id}`),
      },
      {
        path: "/unknown-review/:id",
        element: <UnknownReview />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/reviews/${params.id}`),
      },
    ],
  },
]);

export default router;
