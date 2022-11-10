import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Reviews = ({ id, datas }) => {
  // console.log(datas);
  const navigate = useNavigate();

  const isLogedIn = (event) => {
    event.preventDefault();
    const proceed = window.confirm("You have to LogedIn first!");
    if (proceed) {
      navigate(`/add-review/${id}`);
    } else {
      navigate(`/unknown-review/${id}`);
    }
  };
  return (
    <div>
      <section className="container mx-auto py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {datas.map((data) => (
          <article key={data._id}>
            <div className="flex items-center mb-4 space-x-4">
              {data?.image ? (
                <img
                  className="w-10 h-10 rounded-full"
                  src={data.image}
                  alt=""
                />
              ) : (
                <img
                  className="w-10 h-10 rounded-full bordered"
                  src="https://img.freepik.com/free-vector/follow-me-social-business-theme-design_24877-50426.jpg?w=740&t=st=1667948107~exp=1667948707~hmac=99f779204cb7ac53575cbf8f51ce20354be18c2dcf50e2613fee61e07d6cd8cd"
                  alt=""
                />
              )}
              <div>
                <div className="space-y-1 font-medium dark:text-white">
                  <p>{data.username}</p>
                </div>
                <p className="text-sm text-gray-400">{data.email}</p>
              </div>
            </div>
            <div className="flex items-center mb-1">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>First star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Second star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Third star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Fourth star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Fifth star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <p>{data.rating}</p>
            </div>
            <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
              <p>{data.serviceName}</p>
            </footer>
            <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
              {data.description}
            </p>

            <aside>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                19 people found this helpful
              </p>
              <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                <Link
                  href="#"
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Helpful
                </Link>
                <Link
                  href="#"
                  className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Report abuse
                </Link>
              </div>
            </aside>
          </article>
        ))}
        <div className="text-5xl flex justify-center items-center p-2 bg-white rounded-md">
          <Link
            onClick={isLogedIn}
            to={`/add-review/${id}`}
            className="p-5 w-20 cursor-pointer flex items-center justify-center bg-slate-50 rounded-full tooltip"
            data-tip="Give your feedback"
          >
            +
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
