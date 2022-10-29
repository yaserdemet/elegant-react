import React from "react";
import { iconDatas } from "../utils/data";
import { animate, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const IconSection = () => {
  // console.log(iconDatas)
  const { ref, inView } = useInView();

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 3,
          bounce: 0.3,
        },
      });
    }

    if (!inView) {
      animation.start({
        x: "-100vw",
      });
    }
  }, [inView]);

  return (
    <section ref={ref} className="mb-36 mt-36 w-[75%] mx-auto">
      <div className="flex flex-wrap justify-between  lg:gap-0 item mb-16 icons">
        <div className="md:w-[60%]  sm:w-[90%] ">
          <h3 className="text-[#625fd1] font-bold sm:text-2xl  lg:text-4xl leading-[3.5rem]  sm:text-center lg:text-left  md:text-center tools">
            Give Your Team Tools To Grow
          </h3>

          <p className="mt-6 w-[70%] dark:text-white  text-[#707070] font-light leading-[33px] text-lg sm:text-center lg:text-left">
            Vestibulum commodo sapien non elit porttitor, vitae volutpat nibh
            mollis. Nulla porta risus id neque tempor, in efficitur justo
            imperdiet.
          </p>
        </div>

        <div class="mt-8 w-[30%] flex items-center justify-end green-btn xl:ml-24">
          <div class="flex green-btn">
            <button className=" border dark:text-white border-mainColor text-black hover:bg-mainColor hover:text-white focus:ring-4 transition duration-300 ease-out hover:ease-in font-medium rounded-full text-sm px-7 py-3 mb-2 ">
              See All Features
            </button>
          </div>
        </div>
      </div>

      <motion.div
        animate={animation}
        className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  lg:place-items-around sm:place-items-center gap-12 pt-12"
      >
        {iconDatas.map((item, index) => {
          return (
            <div
              className="p-2 hover:-translate-y-2 ease-in-out duration-300"
              key={item.text}
            >
              <div className="flex px-8 justify-center">
                <img src={item.icon} alt="" />
              </div>

              <p className="p-3 dark:text-white flex justify-center text-[#292929] text-xl mt-4 font-medium">
                {" "}
                {item.text}
              </p>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default IconSection;
