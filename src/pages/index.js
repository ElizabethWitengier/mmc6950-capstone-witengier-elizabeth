import AboutYou from "@/components/AboutYou";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import LatestNews from "@/components/LatestNews";
import OurStory from "@/components/OurStory";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <AboutYou />
      <OurStory />
      <LatestNews />
    </div>
  );
};

export default Home;
