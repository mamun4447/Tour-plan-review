import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const HomeService = ({ datas }) => {
  return (
    <>
      <PhotoProvider
        speed={() => 800}
        easing={(type) =>
          type === 2
            ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
            : "cubic-bezier(0.34, 1.56, 0.64, 1)"
        }
      >
        <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
          {datas.map((data) => (
            <div
              key={data._id}
              className="flex flex-col items-center justify-center w-full max-w-sm mx-auto"
            >
              <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
                <p className=" p-2 h-24 flex items-center justify-center w-96 mx-auto text-center">
                  {data.description.slice(0, 100)}...
                </p>

                <PhotoView src={data.image}>
                  <img
                    src={data.image}
                    alt=""
                    className="rounded h-64 w-full"
                  />
                </PhotoView>
              </div>

              <div className="w-56 mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                  {data.name}
                </h3>

                <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                  <span className="font-bold text-gray-800 dark:text-gray-200">
                    ${data.cost}
                  </span>
                  <Link
                    to={`/services/${data._id}`}
                    className="btn px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-blue-600 border-none rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
                  >
                    Description
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>{" "}
        {/* ========Add service button====== */}
        <div className="text-center m-5">
          <Link
            className="btn bg-blue-600 border-none text-center mb-20"
            to="/services"
          >
            All Service
          </Link>
        </div>
      </PhotoProvider>
    </>
  );
};

export default HomeService;
