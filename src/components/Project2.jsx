import React from "react";
import Task from "../assets/images/feature33.png";

const Project2 = () => {
  return (
    <section className="mx-24  mt-24  mb-48 ">
      <div className="grid grid-cols-2 gap-24 projects2">
        <div className=" ">
          <h4 className="text-[#625fd1] text-4xl leading-10 mb-8  font-semibold">
          Monitor Your Project Progress Towards Launch
          </h4>
          <p className="text-left text-[#707070] mb-8 text-xl">
          Duis vestibulum elit vel neque pharetra vulputate. Quisque scelerisque nisi urna. Duis rutrum non risus in imperdiet.
          </p>

          <h5 className="font-medium text-2xl text-[#292929] mb-4">
          Task History
          </h5>

          <p className="text-left text-[#707070] mb-8 text-xl">
          Vestibulum commodo sapien non elit porttitor, vitae volutpatoto nibh mollis. Nulla porta risus id.
          </p>
          <h5 className="font-medium text-2xl text-[#292929] mb-4 ">
          Task Progress
          </h5>
          <p className="text-left text-[#707070] mb-8 text-xl">
          Vestibulum commodo sapien non elit porttitor, vitae volutpatoto nibh mollis. Nulla porta risus id.
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

        <div className="">
          <img src={Task} alt="Project" />
        </div>
      </div>
    </section>
  );
};

export default Project2;
