import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import FirstSection from "../components/FirstSection";
import IconSection from "../components/IconSection";
import Projects from "../components/Projects";
import Project2 from "../components/Project2";
import Project3 from "../components/Project3";
import AnimatedCard from "../components/AnimatedCard";

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 500;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      isVisible && // to limit setting state only the first time
        setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <div>
      {!isVisible && (
        <a
          href="#navbar"
          className="hover:animate-pulse bottom-10 bg-[#ff4d8c] flex justify-center items-center rounded-full right-10 z-10 fixed w-[45px] h-[45px]"
        >
          {" "}
          <i className="fa fa-angle-up text-white"></i>{" "}
        </a>
      )}
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
