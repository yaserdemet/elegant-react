import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import Header from "../components/About/Header";
import FirstSection from "../components/About/FirstSection";

const About = () => {
  return (
    <section
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

      <Footer />
    </section>
  );
};

export default About;
