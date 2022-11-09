import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaRegPaperPlane } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider";

const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);
  return (
    <div>
      <nav className=" dark:bg-gray-900">
        <div className="container p-6 mx-auto">
          <Link
            className="flex justify-center items-center flex-col text-2xl font-bold text-center text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
            to="/"
          >
            <FaRegPaperPlane />
            Brand
          </Link>

          <div className="flex items-center justify-center mt-6 text-gray-600 capitalize dark:text-gray-300">
            <Link
              to="/"
              className="text-gray-800 dark:text-gray-200 mx-1.5 sm:mx-6"
            >
              Home
            </Link>

            <Link
              to="/services"
              className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
            >
              Services
            </Link>

            {/* =======Optional with authentication======== */}
            {user ? (
              <>
                <Link
                  to="/add-service"
                  className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
                >
                  Add service
                </Link>
                <Link
                  to="/my-reviews"
                  className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
                >
                  My reviews
                </Link>
                <Link
                  to="/blog"
                  className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
                >
                  blog
                </Link>
                <button onClick={LogOut}>Sing Out</button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
                >
                  Log In
                </Link>

                <Link
                  to="/sign-up"
                  className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
                >
                  Sign Up
                </Link>
              </>
            )}

            {/* ======Optional end======= */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
