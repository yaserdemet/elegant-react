import React from "react";
import AnimatedLogo from "../assets/images/plugin-logo.png";

const AnimatedCard = () => {
  return (
    <section className="bg-[#f5f8ff]   flex flex-col">
      <div className=" flex flex-col lg:w-[60%]  mx-auto">
        <div className="mb-24 ">
          <h4 className="text-[#625fd1] pt-24 text-4xl  text-center leading-[60px] font-semibold mb-8  ">
            Boost Your Workflow To Integrate Productive Tools & Plugin
          </h4>
          <p className=" text-[#707070] mb-8 text-xl text-center">
            Aliquam faucibus, odio nec commodo aliquam, neque felis placerat
            dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed
            condimentum est. Mauris arcu odio,
          </p>
        </div>
        <div className="flex justify-center cardAnimate ">
          <img src={AnimatedLogo} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AnimatedCard;
