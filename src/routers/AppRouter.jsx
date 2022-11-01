import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Home/Footer";
import Navbar from "../components/Home/Navbar";
import Career from "../pages/Career";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";


const AppRouter = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="career" element={<Career />} />
        <Route path="contact" element={<Contact />} />
      
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default AppRouter;
