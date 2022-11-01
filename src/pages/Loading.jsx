import React from "react";
import {motion} from "framer-motion"

const Loading = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    // initial={{ strokeOpacity: 0 }}
    // animate={{ strokeOpacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ type: "spring", duration: 3 }}
    className=" flex justify-center items-center mt-36 dark:bg-white">
      <div>
        <img
          src="https://static.wixstatic.com/media/4e02b0_79956d3736504be5b37aab8974914483~mv2.gif"
          alt="loading"
        />
        <p className="text-center font-bold text-3xl text-mainColor   animate-ping ">
          Loading ...
        </p>
      </div>
    </motion.div>
  );
};

export default Loading;
