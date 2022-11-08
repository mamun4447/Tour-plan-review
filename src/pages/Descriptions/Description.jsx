import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Reviews from "./Reviews";

const Description = () => {
  const data = useLoaderData();
  if (data.success) {
    var { _id, name, cost, image, rating, description } = data.datas;
  } else {
    console.log(data.message);
  }
  // console.log(datas);
  return (
    <>
      <section className="  dark:bg-gray-900">
        <div className="relative flex container mx-auto bg-white rounded-md">
          <div className="container flex flex-col justify-center w-full min-h-screen px-10 py-10 mx-auto lg:inset-x-0">
            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl xl:text-5xl dark:text-white">
              What about our <span className="text-blue-500">Service</span>{" "}
              <br />
            </h1>

            <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
              <img
                className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96"
                src={image}
                alt=""
              />

              <div className="mt-8 lg:px-10 lg:mt-0">
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
                  {name}
                </h1>

                <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                  {description}
                </p>

                {/* Price and rating */}
                <div className="flex justify-between items-center ">
                  <div className="flex flex-col">
                    <h3 className="mt-6 text-lg font-medium text-blue-500">
                      Cost of this service
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">${cost}</p>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="mt-6 text-lg font-medium text-blue-500">
                      Rating
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      ${rating}
                    </p>
                  </div>
                </div>
                <Link
                  to="/services"
                  className="btn bg-blue-600 border-none my-5"
                >
                  All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====Reviews====== */}
      <h1 className="text-center text-5xl font-semibold mt-10">
        Real Happy Customer'
        <span className="text-blue-600">
          s<br />
          Real Stories
        </span>
      </h1>
      <Reviews datas={data.datas} />
    </>
  );
};

export default Description;
