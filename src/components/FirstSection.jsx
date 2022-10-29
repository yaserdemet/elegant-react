import React from "react";
import Logo from "../assets/images/management-banner-img.png"
import Shape from "../assets/images/moving-shape.svg"
import {motion} from "framer-motion"
import Typewriter from 'typewriter-effect';
const FirstSection = () => {
  return ( 
    <motion.section 
       initial={{opacity : 0 , }}
        animate={{opacity : 1 , }}
        transition={{duration : 3 , type : "spring"}}
    id="to-top"  className="w-[75%] mx-auto sm:px-6 md:px-0 relative mt-12 mb-12 flex flex-column firstSection">
      {/* <img
        src={Shape}
        class="absolute top-0 right-0 z-0 w-[60%]"
        alt=""
      /> */}

      <div  class="relative  flex flex-row flex-wrap justify-between res gap-4 mt-12">
        <div class="z-10 relative md:w-[45%] first ">
          <h1  class="text-[#625fd1] font-bold text-4xl leading-[3.5rem] xl:text-left md:text-center">
            The #1 Software Tools <br />
            To Manage Team <br />
            Project & Task

                  {/* <Typewriter
                    options={{
                      strings: ['The #1 Software Tools To Manage Team Project & Task' ],
                      autoStart: true,
                      loop: true,
                      // delay : 500,
                      speed : 700
                    
                    }}
                    
                  /> */}
          </h1>
          <p class="mt-6 text-[#707070] font-[20px] leading-9 text-[20px]">
            Phasellus dignissim, tellus in pellentesque mollis, mauris orci
            dignissim nisl, gravida nunc enim quis nibh. Maecenas convallis eros
            a ante dignissim, vitae elementum metus.
          </p>

          <div class="flex flex-row justify-start gap-5 mt-12 btns ">
            <button
             type="button"
             class="focus:outline-none text-white bg-mainColor focus:ring-4 font-medium rounded-full text-sm px-12 py-5 mb-2 transition duration-300 ease-out hover:ease-in"
            >
              Get Started
              

            </button>

            <button
              type="button"
              class="focus:outline-none text-mainColor bg-white focus:ring-4 font-medium hover:bg-mainColor hover:text-white rounded-full text-sm px-12 py-5 mb-2 transition border border-mainColor duration-300 ease-out hover:ease-in"
            >
              Get Demo
            </button>
          </div>
        </div>

        <div  class="z-10 relative d-flex  md:w-[100%] lg:w-[50%] xl:w-[50%]  md:flex">
        <div class="w-[100%] flex items-bottom lg:pt-16">
          <img
            src={Logo}
            class=" object contain"
            data-rjs="2"
            alt=""
          />
        </div>
      </div>
      </div>
    </motion.section>
  );
};

export default FirstSection;
