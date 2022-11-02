import React, { useEffect, useState } from "react";
import Cards from "../components/Home/Cards";
import FirstSection from "../components/Home/FirstSection";
import IconSection from "../components/Home/IconSection";
import Projects from "../components/Home/Projects";
import Project2 from "../components/Home/Project2";
import Project3 from "../components/Home/Project3";
import AnimatedCard from "../components/Home/AnimatedCard";
import Questions from "../components/Home/Questions";
import Wave from "../components/Home/Wave";
import { motion } from "framer-motion";
import blop from "../assets/images/moving-shape.svg";
import GetDemo from "../components/Home/GetDemo";
import Cards2 from "../components/Home/Cards2";
import { useConsumeContext } from "../helpers/contextApi/ContextFile";
import NavBar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import Scroll from "../utils/Scroll";
const Home = () => {

  useEffect(() => {
    document.title = "Elegant Home";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // initial={{ strokeOpacity: 0 }}
      // animate={{ strokeOpacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", duration: 3 }}
    >
      <NavBar />
      <img
        src={blop}
        class="absolute top-0 right-0 z-[-1] xl:w-[60%] lg:w-[100%]"
        alt=""
      />
      {/* {!isVisible && (
        <a
          onClick={handleClick}
          // href="#navbar"
          className="hover:animate-pulse bottom-10 bg-[#ff4d8c] flex justify-center items-center rounded-full right-10 z-10 fixed w-[45px] h-[45px]"
        >
          {" "}
          <i className="fa fa-angle-up text-white"></i>{" "}
        </a>
      )} */}
      <Scroll />
      <Wave />
      <FirstSection />
      <IconSection />
      <Cards />
      <Projects />
      <Project2 />
      <Project3 />
      <GetDemo />
      <Cards2 />
      <AnimatedCard />
      <Questions />
      <Footer />
    </motion.div>
  );
};

export default Home;
