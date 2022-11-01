import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import FirstSection from "../components/FirstSection";
import IconSection from "../components/IconSection";
import Projects from "../components/Projects";
import Project2 from "../components/Project2";
import Project3 from "../components/Project3";
import AnimatedCard from "../components/AnimatedCard";
import Questions from "../components/Questions";
import Wave from "../components/Wave";
import {motion} from "framer-motion"
import blop from "../assets/images/moving-shape.svg"
import GetDemo from "../components/GetDemo";
import Cards2 from "../components/Cards2";
import { useConsumeContext } from "../helpers/contextApi/ContextFile";
// import Modal from "../components/Modal";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);
  const {dark, setDark} = useConsumeContext();


  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    // console.log("dadwad")
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

  const handleClick = () => {
    window.scrollTo({
      top : 0,
      behavior : "smooth"
    })
  }

  return (
    <div
   
    >
      <NavBar />
         <img
      src={blop}
      class="absolute top-0 right-0 z-[-1] xl:w-[60%] lg:w-[100%]"
      alt=""
    />
      {!isVisible && (
        <a
        onClick={handleClick}
          // href="#navbar"
          className="hover:animate-pulse bottom-10 bg-[#ff4d8c] flex justify-center items-center rounded-full right-10 z-10 fixed w-[45px] h-[45px]"
        >
          {" "}
          <i className="fa fa-angle-up text-white"></i>{" "}
        </a>
      )}
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
     
    </div>
  );
};

export default Home;
