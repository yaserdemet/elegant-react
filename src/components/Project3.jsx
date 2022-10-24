import React from "react";
import Project from "../assets/images/feature44.png";

const Project3 = () => {
  return (
    <section className="mx-24  mt-24  mb-24 ">
      <div className="grid grid-cols-2 gap-24 projects">
        <div className="">
          <img src={Project} alt="Project" />
        </div>

        <div className=" ">
          <h4 className="text-[#625fd1] text-4xl leading-10  mb-8 ">
          View, Organize And Prioritize Your Team Task
          </h4>
          <p className="text-left text-[#707070] mb-8 text-xl">
          Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. Cras in maximus sem. Praesent libero augue, ornare eget quam sed, volutpat suscipit arcu.
          </p>

  
          <div>
            <button
              type="button"
              class="border border-mainColor text-mainColor hover:bg-mainColor hover:text-white focus:ring-4 transition duration-300 ease-out hover:ease-in font-medium rounded-full text-sm px-7 py-3 mb-2"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project3;
