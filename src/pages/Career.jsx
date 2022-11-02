import React, { useEffect, useState } from "react";
import Header from "../components/Career/Header";
import Main from "../components/Career/Main";
import Footer from "../components/Home/Footer";
import NavBar from "../components/Home/Navbar";
import { motion } from "framer-motion";
import Scroll from "../utils/Scroll";

const Career = () => {
 

  return (
    <motion.main
      initial={{ x: -600, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", duration: 3 }}
    >

      {/*  This Section was turned into another component  */}
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
      <NavBar />
      <Header />
      <Main />
      <Footer />
    </motion.main>
  );
};

export default Career;
