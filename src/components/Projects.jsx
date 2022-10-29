import React from "react";
import Project from "../assets/images/feature22.png";

const Projects = () => {
  return (

    <section class="mb-44 mt-44 w-[75%] mx-auto">
    <div class="grid grid-cols-2 gap-24 projects">
      <div class="w-[90%] mx-auto flex justify-center items-center">
        <div class="flex justify-center items-center">
          <img src={Project} alt="ProjectImage" />
        </div>
      </div>

      <div class=" ">
        <h4 class="text-[#625fd1] text-4xl leading-10 font-semibold mb-8">
          Plan Project In Details With The Task Timeline
        </h4>
        <p className="text-left text-[#707070] mb-8 text-xl">
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Ut arcu libero.
        </p>

        <h5 className="font-medium text-2xl text-[#292929] mb-4">
          Set Project Deadline
        </h5>

        <p className="text-left text-[#707070] mb-8 text-xl">
          Cras gravida bibendum dolor eu varius. Morbi fermentum velit nisl,
          eget vehicula lorem sodales eget.
        </p>
        <h5 className="font-medium text-2xl text-[#292929] mb-4 ">
          Assign Project To Team
        </h5>
        <p className="text-left text-[#707070] mb-8 text-xl">
          Aliquam in bibendum mauris. Sed vitae erat vel velit blandit pharetra
          vitae nec ante. Cras at est augue.
        </p>
        <div>
          <button
            type="button"
            class="border-2 border-mainColor font-semibold text-black hover:bg-mainColor hover:text-white focus:ring-4 transition duration-300 ease-out hover:ease-in rounded-full text-sm px-9 py-4 mb-2"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  </section>
 
  );
};

export default Projects;
