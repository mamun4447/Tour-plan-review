import React, { useState } from "react";

const AddService = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const image = form.image.value;
    const cost = form.cost.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const services = {
      name,
      image,
      cost,
      rating,
      description,
    };

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(services),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const { success, message } = data;
        if (success) {
          console.log(message);
          form.reset();
        } else {
          console.error(message);
          form.reset();
        }
      });
  };

  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <h2 className="text-xl text-center mb-4 font-semibold text-gray-700 capitalize dark:text-white">
        Add New Service
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          {/* Service name */}
          <div>
            <label className="text-gray-700 dark:text-gray-200">
              Service Name
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder="service name"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          {/* Image Link */}
          <div>
            <label className="text-gray-700 dark:text-gray-200">
              Image Link
            </label>
            <input
              name="image"
              required
              type="text"
              placeholder="image link"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          {/* Service Cost */}
          <div>
            <label className="text-gray-700 dark:text-gray-200">
              Service Cost
            </label>
            <input
              name="cost"
              type="text"
              placeholder="service cost"
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
            Add as Service
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddService;
