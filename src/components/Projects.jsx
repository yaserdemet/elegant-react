import React from "react";
import Project from "../assets/images/feature22.png";

const Projects = () => {
  return (
    <section className="mx-24  mt-24  mb-24 ">
      <div className="grid grid-cols-2 gap-24 projects">
        <div className="">
          <img src={Project} alt="Project" />
        </div>

        <div className=" ">
          <h4 className="text-[#625fd1] text-4xl leading-10 ">
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
            Aliquam in bibendum mauris. Sed vitae erat vel velit blandit
            pharetra vitae nec ante. Cras at est augue.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
