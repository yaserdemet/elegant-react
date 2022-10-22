import React, { useEffect, useState } from "react";
import Logo1 from "../assets/images/logo-bg-white.png";
import Logo2 from "../assets/images/logo-bg-dark.png";

const Navbar = () => {
    const [show , setShow] = React.useState(false)
  

  return (
    <nav id="navbar">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-around">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setShow(!show)}
              type="button"
              class="inline-flex items-center  hover:bg-mainColor justify-center rounded-md p-2 text-gray-400 transition duration-300 ease-out hover:ease-in hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
             
            >
              <span class="sr-only">Open main menu</span>

              <i class={show ? "fa-solid fa-xmark px-1  transition duration-300 ease-out" : "fa-solid fa-bars"}></i> 
          
            </button>
          </div>
          <div class="flex flex-1 gap-4 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
              <img
                class="block h-8 w-auto lg:hidden cursor-pointer"
                src={Logo1}
                alt="Your Company"
              />
              <img
                class="hidden h-8 w-auto lg:block cursor-pointer"
                src={Logo1}
                alt="Elegant Software"
              />
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex gap-8 space-x-4">
                <a
                  href="#"
                  class="text-black hover:bg-mainColor hover:text-white  px-3 py-2 rounded-md text-xl transition duration-300 ease-out hover:ease-in font-medium"
                  aria-current="page"
                >
                  Dashboard
                </a>

                <a
                  href="#"
                  class="text-black hover:bg-mainColor hover:text-white px-3 py-2 rounded-md text-xl font-medium transition duration-300 ease-out hover:ease-in"
                >
                  Team
                </a>

                <a
                  href="#"
                  class="text-black hover:bg-mainColor hover:text-white px-3 py-2 rounded-md text-xl font-medium transition duration-300 ease-out hover:ease-in"
                >
                  Projects
                </a>

                <a
                  href="#"
                  class="text-black hover:bg-mainColor hover:text-white px-3 py-2 rounded-md text-xl font-medium transition duration-300 ease-out hover:ease-in"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <span class="sr-only">View notifications</span>

            <div class="relative ml-3">
              <div>
                <button
                  type="button"
                  class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span class="sr-only">Open user menu</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sm:hidden " id="mobile-menu">

        <div class={show ? "block " : "hidden transition duration-300 ease-out " }>
        <div class="space-y-1 px-2 pt-2 pb-3  ">
          <a
            href="#"
            class="text-black hover:bg-mainColor  hover:text-white block px-3 py-2 text-center rounded-md font-medium transition duration-300 ease-out hover:ease-in"
            aria-current="page"
          >
            Dashboard
          </a>

          <a
            href="#"
            class= "text-black text-center hover:bg-mainColor hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-out hover:ease-in"
          >
            Team
          </a>

          <a
            href="#"
            class="text-black text-center hover:bg-mainColor hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-out hover:ease-in"
          >
            Projects
          </a>

          <a
            href="#"
            class="text-black text-center hover:bg-mainColor hover:text-white block px-3 py-2 rounded-md   font-medium transition duration-300 ease-out hover:ease-in"
          >
            Contact
          </a>
        </div>
        </div>
 
      </div>
    </nav>
  );
};

export default Navbar;
