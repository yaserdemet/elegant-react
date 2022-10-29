import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Logo1 from "../assets/images/logo-bg-white.png";
// import Logo2 from "../assets/images/logo-bg-dark.png";
import { useTranslation } from "react-i18next";
import { useConsumeContext } from "../helpers/contextApi/ContextFile";
import { motion } from "framer-motion";
import en from "../assets/images/gb.svg"
import tr from "../assets/images/tr.svg"


function NavBar() {
  const [click, setClick] = useState(false);
  const { lang, setLang, changeLanguage } = useConsumeContext();
  //   // console.log(changeLanguage);
  const { t, i18n } = useTranslation();

  const handleClick = () => setClick(!click);
  return (
    <nav className="navbar sm:w-[75%] pt-4">
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
          <div>
            <motion.img
              class=" h-10 w-auto lg:block cursor-pointer"
              src={Logo1}
              alt="Elegant Software"
            />
          </div>
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item img">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links  text-black hover:text-mainColor text-center text-2xl block px-3 py-2 rounded-md font-medium transition duration-300 ease-out hover:ease-in"
              onClick={handleClick}
            >
              <motion.img
                class="mx-auto h-8 flex justify-center items-center  w-auto"
                src={Logo1}
                alt="Elegant Software"
              />
            </NavLink>
          </li>

          <li className="nav-item ">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links  text-black hover:text-mainColor text-center text-2xl block px-3 py-2 rounded-md font-medium transition duration-300 ease-out hover:ease-in"
              onClick={handleClick}
            >
              {t("nav1")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to=""
              activeClassName="active"
              className="nav-links text-black hover:text-mainColor text-center text-2xl  block px-3 py-2 rounded-md font-medium transition duration-300 ease-out hover:ease-in"
              onClick={handleClick}
            >
              {t("nav3")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to=""
              activeClassName="active"
              className="nav-links text-black  text-center hover:text-mainColor text-2xl  block px-3 py-2 rounded-md font-medium transition duration-300 ease-out hover:ease-in"
              onClick={handleClick}
            >
              Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to=""
              activeClassName="active"
              className="nav-links text-black  text-center hover:text-mainColor text-2xl  block px-3 py-2 rounded-md font-medium transition duration-300 ease-out hover:ease-in"
              onClick={handleClick}
            >
             {t("nav4")}
            </NavLink>
          </li>
          <li className="nav-item">
            <div className="flex flex-row justify-center  items-strech pt-1">
              <div className="flex flex-row justify-center items-center text-center ">
                <label htmlFor="language " className="text-center mr-4">
              {
                lang == "en" ?  <img src={en} alt="" /> : 
                <img src={tr} alt="" />
              }

                </label>
              </div>
              <div className="flex ">
                <select
                  name=""
                  className="block rounded-lg  px-8  text-sm text-gray-500  border-0  appearance-none dark:border-mainColor focus:outline-mainColor  focus:border-mainColor "
                  id="language"
                  onChange={(e) => changeLanguage(e.target.value)}
                >
                  <option className="border-none" value="">
                    Select Language
                  </option>
                  <option className="text-black" value="en">
                    English
                  </option>
                  <option value="tr" className="hover:bg-mainColor px-16">
                    Türkçe
                  </option>
                </select>
              </div>
            </div>
          </li>
          <li>
          <button
             
              class="flex justify-center transition duration-900 items-center hover:bg-gray-200 px-4 border-1 border border-transparent rounded-md duration-300 ease-out hover:ease-in"
            >
              <span >🌙</span>
              <span >☀️</span>
            </button>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
