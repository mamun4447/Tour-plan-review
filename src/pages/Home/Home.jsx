import React from "react";
import OurTeam from "./OurTeam";
import SendMail from "./SendMail";
import Hero from "./Hero";
import { useLoaderData } from "react-router-dom";
import HomeService from "./HomeService";

const Home = () => {
  const { datasHome } = useLoaderData();
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
