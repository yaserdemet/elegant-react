import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import Header from "../components/About/Header";
import FirstSection from "../components/About/FirstSection";
import Cards from "../components/About/Cards";

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
      <Header />
      <FirstSection />
      <Cards />
      <Footer />
    </motion.section>
  );
};

export default About;
