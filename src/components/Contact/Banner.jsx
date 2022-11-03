import React from "react";
import icon1 from "../../assets/images/career/bread1.png";
import icon2 from "../../assets/images/career/bread2.png";
import icon3 from "../../assets/images/career/bread3.png";
import icon4 from "../../assets/images/career/bread4.png";

const Banner = () => {
  return (
    <header className="bg-[#ecf7ff] relative  py-24">
      <div className=" bg-[##ecf7ff] z-10" style={{ zIndex: "-20" }}>
        <img src={icon1} alt="" className="absolute left-[5%] top-[10%] " />
        <img src={icon1} alt="" className="absolute right-[15%] bottom-[3%] " />

        <img
          src={icon2}
          alt=""
          className="absolute left-[15%] bottom-[0%] z-0"
        />
        <img src={icon3} alt="" className="absolute left-[35%] top-[63%] z-0" />
        <img
          src={icon4}
          alt=""
          className="absolute right-[20%] top-[10%] z-0 overflow-hidden"
        />

        <img src={icon3} alt="" className="absolute right-[5%] top-[3%] z-0" />

        <img
          src={icon4}
          alt=""
          className="absolute left-[0%] top-[30%] z-0 overflow-hidden"
        />
      </div>

      <div className="w-[80%] mx-auto text-center  z-20">
        <h5 className="font-bold text-5xl text-black z-20">Contact</h5>
        <p className="mt-8 text-black text-2xl">Home / Contact</p>
      </div>
    </header>
  );
};

export default Banner;
