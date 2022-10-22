import React from "react";
import { iconDatas } from "../utils/data";

const IconSection = () => {
  // console.log(iconDatas)
  return (
    <section className="mt-36  ">
      <div className="flex flex-wrap justify-center mx-24 mb-16 icons">
        <div className="w-[70%]">
          <h3 className="text-blue-400 font-bold  text-4xl leading-[3.5rem] sm:text-center lg:text-left md:text-center">
            Give Your Team Tools To Grow
          </h3>

          <p className="mt-6 w-[70%] text-[#707070] font-light leading-[33px] text-lg sm:text-center lg:text-left">
            Vestibulum commodo sapien non elit porttitor, vitae volutpat nibh
            mollis. Nulla porta risus id neque tempor, in efficitur justo
            imperdiet.
          </p>
        </div>

        <div className="mt-8 w-[30%] green-btn ">
          <button className="focus:outline-none ml-8   text-white bg-mainColor p-6 focus:ring-4 font-medium rounded-full text-sm hover:bg-white hover:text-mainColor transition duration-300 ease-out hover:ease-in hover:border-2 hover:border-mainColor ">
            See All Features
          </button>
        </div>
      </div>

      <div className="   mx-24 flex  flex-wrap justify-center align-middle gap-x-48 gap-y-12 hover:">
        {iconDatas.map((item, index) => {
          return (
            <div className="p-2 hover:-translate-y-2 ease-in-out duration-300" key={item.text}>
              <div className="flex px-8 justify-center">
                <img src={item.icon} alt="" />
              </div>

              <p className="p-3 flex justify-center text-base mt-4">
                {" "}
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default IconSection;
