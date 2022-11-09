import React from "react";
import OurTeam from "./OurTeam";
import SendMail from "./SendMail";
import Hero from "./Hero";
import { useLoaderData } from "react-router-dom";
import HomeService from "./HomeService";
import useTitle from "../../hooks/useTitle";

const Home = () => {
  const { datasHome } = useLoaderData();
  useTitle("Home");
  // console.log(datasHome);
  return (
    <div>
      <Hero />
      <HomeService datas={datasHome} />
      <SendMail />
      <OurTeam />
    </div>
  );
};;

export default Home;
