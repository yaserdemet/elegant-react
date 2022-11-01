import React from "react";
import Banner from "../components/Contact/Banner";
import Form from "../components/Contact/Form";
import Map from "../components/Contact/Map";
import Footer from "../components/Home/Footer";
import NavBar from "../components/Home/Navbar";

const Contact = () => {
  return (
    <section>
      <NavBar />
      <Banner />
      <Form />
      <Map />
      <Footer />
    </section>
  );
};

export default Contact;
