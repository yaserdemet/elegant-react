import React from "react";
import Cards from "../components/Cards";
import FirstSection from "../components/FirstSection";
import IconSection from "../components/IconSection";
import Projects from "../components/Projects";
import Project2 from "../components/Project2";
import Project3 from "../components/Project3";
import AnimatedCard from "../components/AnimatedCard";

const Home = () => {
  return (
    <div>
      <FirstSection />
      <IconSection />
      <Cards />
      <Projects />
      <Project2 />
      <Project3 />
      <AnimatedCard />
    </div>
  );
};

export default Home;
