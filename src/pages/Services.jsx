import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Services = () => {
  const { datas } = useLoaderData();
  // console.log(datas);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl my-10 mt-10 font-semibold text-center">
          All Services
        </h1>
        <p className="text-center w-[50%] mb-10">
          The structure consists of managerial hierarchy from top level to
          junior level managers and assistants. Normally, a large scale travel
          company has two parts – Head Office and number of branches within the
          country and abroad.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 ">
        {datas.map((data) => (
          <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
            <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
              <img src={data.image} alt="" className="rounded h-64 w-full" />
            </div>

            <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
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
      </div>
      {/* ========Add service button====== */}
      <div className="text-center m-5">
        <Link
          className="btn bg-blue-600 border-none text-center"
          to="/add-service"
        >
          Add Service
        </Link>
      </div>
    </>
  );
};;;;;;;;;;;;;;;;;;;;;;;

export default Services;
