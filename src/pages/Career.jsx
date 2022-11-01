import React, { useEffect, useState } from "react";
import Header from "../components/Career/Header";
import Main from "../components/Career/Main";
import Footer from "../components/Home/Footer";
import NavBar from "../components/Home/Navbar";
import { motion } from "framer-motion";

const Career = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    // console.log("dadwad")
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 300;
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
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.main
      initial={{ x: -600, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", duration: 3 }}
    >
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
      <NavBar />
      <Header />
      <Main />
      <Footer />
    </motion.main>
  );
};

export default Career;
