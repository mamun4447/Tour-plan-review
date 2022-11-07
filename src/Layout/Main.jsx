import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
import Navbar from "../pages/Home/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
