import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container  py-16 mx-auto bg-white rounded-md">
      <div className=" items-center lg:flex ">
        {/* ----------Heading---------- */}
        <div className="w-full lg:w-1/2 text-center md:text-left lg:text-left">
          <div className="lg:max-w-lg ml-10">
            <h1 className="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-5xl">
              Best Place To Choose Your Tour Plan
            </h1>

            <p className="mt-2 text-gray-600 dark:text-gray-400 my-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              beatae error laborum ab amet sunt recusandae? Reiciendis natus
              perspiciatis optio.
            </p>

            <Link
              to="/"
              className="btn bg-blue-600 border-none my-2 cursor-pointer"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* ========Sliders====== */}
        <div className="carousel lg:w-[40%] rounded-md m-2 h-96">
          {/* ----->Slider 1<------ */}
          <div id="slide1" className="carousel-item relative rounded-md w-full">
            <img
              src="https://img.freepik.com/free-vector/see-you-soon-concept-illustration_114360-6165.jpg?w=740&t=st=1667846017~exp=1667846617~hmac=5f6fbd1df8fed06ffc8d2aa9eefcd39359940aa4ca9bbb99b7641dfb2388e99a"
              alt=""
              className="mx-auto h-96"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          {/* ----->Slider 2<------ */}

          <div id="slide2" className="carousel-item relative w-full rounded-md">
            <img
              src="https://img.freepik.com/free-vector/campfire-concept-illustration_114360-1180.jpg?t=st=1667811759~exp=1667812359~hmac=81e569c57453ccd7517728cd37e4bdbd31024ba3d4a4e7ab8c1041070d8af9c9"
              alt=""
              className="mx-auto h-96"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          {/* ----->Slider 3<------ */}

          <div id="slide3" className="carousel-item relative w-full rounded-md">
            <img
              src="https://img.freepik.com/free-vector/current-location-concept-illustration_114360-4048.jpg?t=st=1667811759~exp=1667812359~hmac=169e79ae4eb572b7083fa13e659d12755b302261787dccf3702a087002b26467"
              alt=""
              className="mx-auto h-96"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
