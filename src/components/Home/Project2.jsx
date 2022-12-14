import React from "react";
import Task from "../../assets/images/feature33.png";

const Project2 = () => {
  return (
   

    <section class="mb-36 mt-36 w-[80%] mx-auto">
    <div class="grid grid-cols-2 gap-24 projects">
      <div class=" ">
        <h4 class="text-[#625fd1] text-4xl leading-10 font-semibold mb-8 dark:text-white">
          Plan Project In Details With The Task Timeline
        </h4>
        <p className="text-left text-[#707070] mb-8 text-xl dark:text-white">
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Ut arcu libero.
        </p>

        <h5 className="font-medium text-2xl text-[#292929 ] dark:text-white mb-4">
          Task History
        </h5>

        <p className="text-left text-[#707070] mb-8 text-xl dark:text-white">
          Cras gravida bibendum dolor eu varius. Morbi fermentum velit nisl,
          eget vehicula lorem sodales eget.
        </p>
        <h5 className="font-medium text-2xl text-[#292929] mb-4 dark:text-white">
          Task Progress
        </h5>
        <p className="text-left text-[#707070] mb-8 text-xl dark:text-white">
          Aliquam in bibendum mauris. Sed vitae erat vel velit blandit pharetra
          vitae nec ante. Cras at est augue.
        </p>
        <div>
          <button
            type="button"
            class="border-2 border-mainColor font-semibold text-black hover:bg-mainColor dark:text-white hover:text-white focus:ring-4 transition duration-300 ease-out hover:ease-in rounded-full text-sm px-9 py-4 mb-2"
          >
            Learn More
          </button>
        </div>
      </div>

      <div class="w-[100%] flex justify-center items-center">
        <div class="flex justify-end items-center">
          <img src={Task} alt="ProjectImage" />
        </div>
      </div>
    </div>
  </section>
    
  );
};

export default Project2;
