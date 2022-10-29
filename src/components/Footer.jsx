import React from "react";
import Logo1 from "../assets/images/logo-bg-white.png";
import Logo2 from "../assets/images/logo-bg-dark.png";

const Footer = () => {
  return (
    <>
      <div class="bg-secondaryColor py-24">
        <div class="container mx-auto w-[75%]">
          <div class="grid xl:grid-cols-4 gap-8 md:grid-cols-2">
            <div class="">
              <dt>
                <h5 class="text-2xl mb-4 font-medium leading-6 text-white">
                  Elegant Software
                </h5>
              </dt>
              <p class="mt-2 text-base text-white">
                Aenean non accumsan ante. Duis et risus accumsan sem tempus
                porta nec sit amet est. Sed ut euismod quam. Suspendisse
                potenti. Aliquam fringilla orci tincidunt sit amet est.
              </p>
              <ul class="text-base items-center mt-4 flex justify-start gap-x-4">
                <li href="#" target="_blank">
                  <a class="border-[50%] w-[40px] h-[40px] text-center iconsItem  hover:bg-mainColor hover:border-none transition-all duration-300 ease-out hover:ease-in">
                    <i class="fa-brands fa-facebook text-white"></i>
                  </a>
                </li>
                <li href="#" target="_blank">
                  <a class="border-[50%] w-[40px] h-[40px] text-center iconsItem  hover:bg-mainColor hover:border-none transition-all duration-300 ease-out hover:ease-in">
                    <i class="fa-brands fa-twitter text-white"></i>
                  </a>
                </li>
                <li href="#" target="_blank">
                  <a class="border-[50%] w-[40px] h-[40px] text-center iconsItem  hover:bg-mainColor hover:border-none transition-all duration-300 ease-out hover:ease-in">
                    <i class="fa-brands fa-instagram text-white"></i>
                  </a>
                </li>
                <li href="#" target="_blank" class=" ">
                  <a class="border-[50%] w-[40px] h-[40px] text-center iconsItem hover:bg-mainColor hover:border-none transition-all duration-300 ease-out hover:ease-in">
                    <i class="first-line: fa-brands fa-linkedin text-white"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div class="">
              <div>
                <h5 class="text-2xl mb-4 font-medium leading-6 text-white md:text-left">
                  No hidden fees
                </h5>
              </div>
              <div class="mt-2 text-base text-white">
                <ul class="text-base">
                  <li class="mb-2">Timeline Review</li>
                  <li class="mb-2">Custom Fields</li>
                  <li class="mb-2">Custom Templates</li>
                  <li class="mb-2">Task Dependencies</li>
                </ul>
              </div>
            </div>
            <div class="text-base text-white">
              <h5 class="text-2xl mb-4 font-medium leading-6 text-white">
                Transfers are instant
              </h5>

              <ul class="text-base">
                <li class="mb-2">Timeline Review</li>
                <li class="mb-2">Custom Fields</li>
                <li class="mb-2">Custom Templates</li>
                <li class="mb-2">Task Dependencies</li>
              </ul>
            </div>

            <div class="relative container">
              <h5 class="font-bold text-white text-2xl mb-4">
                Subscribe Newsletter
              </h5>
              <p class="text-base text-white lg:pr-16 leading-7">
                Aenean non accumsan ante. Duis et risus accumsan sem tempus
                porta nec sit amet est. Duis et risus accumsan sem tempus
                portca.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center bg-[#242321] border-t-2 border-mainColor w-full p-8 mx-auto">
        <p class="text-lg text-white">

        ©copyright    {new Date().getFullYear()}  <span class="text-mainColor">Elegant</span> Software
    
        </p>
      </div>
    </>
  );
};

export default Footer;
