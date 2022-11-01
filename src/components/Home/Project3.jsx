import React from "react";
import Project from "../../assets/images/feature44.png";

const Project3 = () => {
  return (
    <section className="mb-36 mt-36 w-[80%] mx-auto ">
    <div className="grid grid-cols-2 gap-24 projects">
      <div class="w-[90%] mx-auto flex justify-center items-center">
        <div class="flex justify-center items-center">
          <img src={Project} alt="ProjectImage" />
        </div>
      </div>

      <div class="flex justify-end">
        <div class="w-[100%] my-auto">
        <div class="">
          <h4
            className="text-[#625fd1] text-4xl leading-[54px] font-semibold  mb-8 dark:text-white"
          >
            View, Organize And Prioritize Your Team Task
          </h4>
          <p className="text-left text-[#707070] mb-8 text-xl dark:text-white">
            Phasellus dignissim, tellus in pellentesque mollis, mauris orci
            dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis
            eros a ante dignissim, vitae elementum metus facilisis. Cras in
            maximus sem. Praesent libero augue, ornare eget quam sed, volutpat
            suscipit arcu.
          </p>

          <div>
            <button
              type="button"
              class="border-2 dark:text-white border-mainColor font-semibold text-black hover:bg-mainColor hover:text-white focus:ring-4 transition duration-300 ease-out hover:ease-in rounded-full text-sm px-9 py-4 mb-2"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  </section>
  );
};

export default Project3;
