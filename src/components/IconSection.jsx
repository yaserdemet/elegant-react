import React from "react";
import { iconDatas } from "../utils/data";

const IconSection = () => {
  // console.log(iconDatas)
  return (
    <section>
      <div className="flex">
        <div>
          <h3 className="text-blue-400 font-bold  text-4xl leading-[3.5rem] sm:text-center lg:text-left">Give Your Team Tools To Grow</h3>

          <p className="mt-6 text-[#707070] font-[20px] leading-9 text-2xl"> 
            Vestibulum commodo sapien non elit porttitor, vitae volutpat nibh
            mollis. Nulla porta risus id neque tempor, in efficitur justo
            imperdiet.
          </p>
        </div>
        <button className="focus:outline-none text-white bg-mainColor focus:ring-4 font-medium rounded-full text-sm px-7 py-4 mb-2 transition duration-300 ease-out hover:ease-in">See All Features</button>
        <div></div>
      </div>

      <div className="mx-24 flex  flex-wrap justify-center align-middle gap-x-48 gap-y-12 hover:">
        {iconDatas.map((item, index) => {
          return (
            <div className="p-2 " key={item.text}>
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
