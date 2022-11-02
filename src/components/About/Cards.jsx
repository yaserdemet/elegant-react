import React from "react";
import { cartData } from "../../utils/aboutData";

const Cards = () => {
  console.log(cartData);
  return (
    <section className=" dark:bg-black mt-12 pb-24 mb-6  w-[80%] mx-auto">
      <div className="flex flex-col">
        <h5 className="text-center md:text-3xl  lg:text-4xl font-semibold mb-16 pt-16 text-[#625fd1]">
          What We Offer
        </h5>
        <div className="flex flex-wrap  gap-12 justify-center sm:justify-center lg:justify-around ">
          {cartData.map((cart, index) => {
            return (
              <div
                key={index}
                className="max-w-sm ml-0 dark:bg-black bg-white rounded-[18px] border hover:-translate-y-2 ease-in-out duration-300 border-gray-200 shadow-md p-12"
              >
                {cart.img}
                <div class="p-5">
                  <h5 class="mb-2 text-xl font-bold tracking-tight text-center text-blue-400">
                    {cart.text}
                  </h5>

                  <p class="mb-8 font-normal text-[#707070] text-center">
                    {cart.explanation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Cards;
