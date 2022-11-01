import React, { useEffect } from "react";
import Banner from "../components/Contact/Banner";
import Form from "../components/Contact/Form";
import Map from "../components/Contact/Map";
import Footer from "../components/Home/Footer";
import NavBar from "../components/Home/Navbar";
import {motion} from "framer-motion"

const Contact = () => {

  useEffect(() => {
    document.title = "Elegant Contact"
  } , [])
  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ type: "spring", duration: 3 }}
    >
      <NavBar />
      <Banner />
      <Form />
      <Map />
      <Footer />
    </motion.section>
  );
};

export default Contact;
