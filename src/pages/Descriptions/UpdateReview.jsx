import { success } from "daisyui/src/colors";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { toast } from "react-toastify";

const UpdateReview = () => {
  const router = useParams();
  const { id } = router;
  const [reviews, setReviews] = useState({});
  const navigate = useNavigate();
  useTitle("update-review");

  //======Update MyReview=======//
  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.datas);
      });
  }, [id]);
  //   console.log(reviews);

  const handleUpdate = (event) => {
    event.preventDefault();

    const form = event.target;
    const username = form.username.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const updateInfo = {
      username,
      rating,
      description,
    };

    fetch(`http://localhost:5000/review/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (success) {
          if (data.modifiedCount > 0) {
            const remaining = reviews.filter((odr) => odr._id !== id);
            const approving = reviews.find((odr) => odr._id === id);

            const newReviews = [approving, ...remaining];
            setReviews(newReviews);
          }
toast.success("Updated!");
          navigate("/my-reviews");
        } else {
          // console.log(data.message);
          toast.error(data.message);
        }
      });

    // console.log(reviews);
  };

  //   console.log(id);
  return (
    <div>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-xl text-center mb-4 font-semibold text-gray-700 capitalize dark:text-white">
          Update your review
        </h2>

        <form onSubmit={handleUpdate}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            {/* Service name */}
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Service Name
              </label>
              <input
                name="serviceName"
                type="text"
                defaultValue={reviews.serviceName}
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
              {reviews?.displayName ? (
                <input
                  name="username"
                  required
                  defaultValue={reviews.displayName}
                  type="text"
                  placeholder="user name"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              ) : (
                <input
                  name="username"
                  required
                  defaultValue={reviews.username}
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
                defaultValue={reviews.email}
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
                defaultValue={reviews.rating}
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
                defaultValue={reviews.description}
                className="textarea textarea-bordered block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                placeholder="Bio"
              ></textarea>
            </div>
          </div>
          {/* =======Submit button==== */}
          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Add as Service
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateReview;
