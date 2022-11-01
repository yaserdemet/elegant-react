import React from 'react'
import Header from '../components/Career/Header'
import Main from '../components/Career/Main'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'
import {motion} from "framer-motion"

const Career = () => {
  return (
    <motion.main
    initial={{x : -600 , opacity : 0}}
    animate={{x : 0  , opacity : 1}}
    exit ={{opacity : 0 }}
     transition ={{type : "spring" , duration : 3 }}
    >
            <NavBar />
            <Header />
            <Main />
            <Footer />
    </motion.main>
  )
}

export default Career