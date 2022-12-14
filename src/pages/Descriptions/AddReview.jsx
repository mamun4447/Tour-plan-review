import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useTitle from "../../hooks/useTitle";
import { toast } from "react-toastify";

const AddReview = () => {
  const { datas } = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(user);
  useTitle("add-review");

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const username = form.username.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const review = {
      id: datas._id,
      image: user.photoURL,
      serviceName: datas.name,
      username,
      email: user.email,
      rating,
      description,
    };

    fetch("https://server-eight-flame.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log(data.message);
          form.reset();
          toast.success("Review added!");
          navigate(`/services/${datas._id}`);
        } else {
          console.log(data.message);
          form.reset();
        }
      });
  };
  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <h2 className="text-xl text-center mb-4 font-semibold text-gray-700 capitalize dark:text-white">
        Add New Reviews
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          {/* Service name */}
          <div>
            <label className="text-gray-700 dark:text-gray-200">
              Service Name
            </label>
            <input
              name="serviceName"
              type="text"
              defaultValue={datas.name}
              readOnly
              placeholder="service name"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          {/* User Name */}
          <div>
            <label className="text-gray-700 dark:text-gray-200">
              User name
            </label>
            {user?.displayName ? (
              <input
                name="username"
                required
                defaultValue={user.displayName}
                type="text"
                placeholder="user name"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            ) : (
              <input
                name="username"
                required
                type="text"
                placeholder="user name"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            )}
          </div>

          {/* User email */}
          <div>
            <label className="text-gray-700 dark:text-gray-200">
              User email
            </label>
            <input
              name="email"
              type="text"
              required
              defaultValue={user.email}
              readOnly
              placeholder="user email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="text-gray-700 dark:text-gray-200">Rating</label>
            <input
              type="text"
              name="rating"
              placeholder="rating out of 5"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          {/* Descriptions */}
          <div>
            <label className="text-gray-700 dark:text-gray-200">
              Description
            </label>
            <textarea
              name="description"
              className="textarea textarea-bordered block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              placeholder="Bio"
            ></textarea>
          </div>
        </div>
        {/* =======Submit button==== */}
        <div className="flex justify-end mt-6">
          <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Add as Review
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddReview;
