import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import Header from "../components/About/Header";
import FirstSection from "../components/About/FirstSection";
import Cards from "../components/About/Cards";
import PurpleSection from "../components/About/PurpleSection";
import Scroll from "../utils/Scroll";
// import Counter from "../components/About/Counter";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // initial={{ strokeOpacity: 0 }}
      // animate={{ strokeOpacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", duration: 3 }}
    >
      <NavBar />
      <Scroll />
      <Header />
      <FirstSection />
      <Cards />
      {/* <Counter /> */}
      <PurpleSection />
      <Footer />
    </motion.section>
  );
};

export default About;
