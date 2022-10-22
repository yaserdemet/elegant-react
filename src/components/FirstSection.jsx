import React from "react";
import Logo from "../assets/images/management-banner-img.png"
import Shape from "../assets/images/moving-shape.svg"


const FirstSection = () => {
  return (
    <section id="to-top" class="mx-auto  w-full px-2 sm:px-6 lg:px-8 relative mt-12 mb-24 flex flex-column">
      <img
        src={Shape}
        class="absolute top-0 right-0 z-0 w-[60%]"
        alt=""
      />

      <div class="w-full relative mt-12 flex flex-row justify-around res">
        <div class="z-10 relative w-[40%] first">
          <h1 class="text-blue-400 font-bold  text-4xl leading-[3.5rem] sm:text-center lg:text-left">
            The #1 Software Tools <br />
            To Manage Team <br />
            Project & Task
          </h1>
          <p class="mt-6 text-[#707070] font-[20px] leading-9 text-2xl">
            Phasellus dignissim, tellus in pellentesque mollis, mauris orci
            dignissim nisl, gravida nunc enim quis nibh. Maecenas convallis eros
            a ante dignissim, vitae elementum metus.
          </p>

          <div class="flex flex-row justify-start gap-5 mt-5 btns">
            <button
              type="button"
              class="focus:outline-none text-white bg-mainColor focus:ring-4 font-medium rounded-full text-sm px-7 py-4 mb-2 transition duration-300 ease-out hover:ease-in"
            >
              Get Started
            </button>

            <button
              type="button"
              class="border border-mainColor text-mainColor hover:bg-mainColor hover:text-white focus:ring-4 transition duration-300 ease-out hover:ease-in font-medium rounded-full text-sm px-7 py-3 mb-2"
            >
              Get Demo
            </button>
          </div>
        </div>

        <div class="z-10 relative d-flex align-center ">
          <img
            src={Logo}
            class="h-96 align-center"
            data-rjs="2"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
