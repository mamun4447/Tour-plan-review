import React from "react";
import OurTeam from "./OurTeam";
import SendMail from "./SendMail";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <SendMail />
      <OurTeam />
    </div>
  );
};

export default Home;
