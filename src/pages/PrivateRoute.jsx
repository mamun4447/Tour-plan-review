import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import RiseLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import colorNames from "daisyui/src/colors/colorNames";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <>
        <div className="flex items-center justify-center">
          <RiseLoader color="#36d7b7" />
        </div>
        <ClipLoader
          color={colorNames}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <div className="flex items-center justify-center">
          <RiseLoader color="#36d7b7" />
        </div>
      </>
    );
  }

  if (!user) {
    return (
      <Navigate to="/login" state={{ from: location }} replace>
        {toast.error("Can't access without logIn")}
      </Navigate>
    );
  }
  return children;
};

export default PrivateRoute;
