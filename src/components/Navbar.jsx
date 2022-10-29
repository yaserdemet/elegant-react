// import React, { useEffect, useState } from "react";
// import Logo1 from "../assets/images/logo-bg-white.png";
// // import Logo2 from "../assets/images/logo-bg-dark.png";
// import { useTranslation } from "react-i18next";
// import { useConsumeContext } from "../helpers/contextApi/ContextFile";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   const { lang, setLang, changeLanguage } = useConsumeContext();
//   // console.log(changeLanguage);
//   const { t, i18n } = useTranslation();

//   const [show, setShow] = useState(false);
//   const controlNavbar = () => {
//     if (window.scrollY > 250) {
//       setShow(true);
//     } else {
//       setShow(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", controlNavbar);
//     return () => {
//       window.removeEventListener("scroll", controlNavbar);
//     };
//   }, []);

//   return (
// <nav>
//   <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//     <div class="relative flex h-16 items-center justify-around">
//       <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
//         <button
//           onClick={() => setShow(!show)}
//           type="button"
//           class="inline-flex items-center  hover:bg-mainColor justify-center rounded-md p-2 text-gray-400 transition duration-300 ease-out hover:ease-in hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//           aria-controls="mobile-menu"
//           aria-expanded="false"
//         >
//           <span class="sr-only">Open main menu</span>

//           <i
//             class={
//               show
//                 ? "fa-solid fa-xmark px-1  transition duration-300 ease-out"
//                 : "fa-solid fa-bars"
//             }
//           ></i>
//         </button>
//       </div>
//       <div class="flex flex-1 gap-4 items-center justify-center sm:items-stretch sm:justify-start">
//         <div class="flex flex-shrink-0 items-center">
//           <img
//             class="block h-8 w-auto lg:hidden cursor-pointer"
//             src={Logo1}
//             alt="Your Company"
//           />
//           <motion.img
//             class="hidden h-8 w-auto lg:block cursor-pointer"
//             src={Logo1}
//             alt="Elegant Software"
//             animate={{ scale: 1 }}
//             initial={{ scale: 0 }}
//             transition={{ duration: 2 }}
//             // whileHover={{scale : 1.5}}
//           />
//         </div>
//         <div class="hidden sm:ml-6 sm:block">
//           <div class="flex gap-8 space-x-4">
//             <a
//               href="#"
//               class="text-black hover:bg-mainColor hover:text-white  px-3 py-2 rounded-md text-xl transition duration-300 ease-out hover:ease-in font-medium"
//               aria-current="page"
//             >
//               {t("nav1")}
//             </a>

//             <a
//               href="#"
//               class="text-black hover:bg-mainColor hover:text-white px-3 py-2 rounded-md text-xl font-medium transition duration-300 ease-out hover:ease-in"
//             >
//               {t("nav2")}
//             </a>

//             <a
//               href="#"
//               class="text-black hover:bg-mainColor hover:text-white px-3 py-2 rounded-md text-xl font-medium transition duration-300 ease-out hover:ease-in"
//             >
//               {t("nav3")}
//             </a>

//             <a
//               href="#"
//               class="text-black hover:bg-mainColor hover:text-white px-3 py-2 rounded-md text-xl font-medium transition duration-300 ease-out hover:ease-in"
//             >
//               {t("nav4")}
//             </a>

//             <div className="flex flex-row justify-center ">
//               <div className="flex flex-row justify-center items-center text-center">
//                 <label htmlFor="language " className="text-center">
//                   <i class="fa-regular fa-question pr-12 text-center"></i>
//                 </label>
//               </div>

//               <div className="flex ">
//                 <select
//                   name=""
//                   className="block rounded-lg  px-8  text-sm text-gray-500  border-0  appearance-none dark:border-mainColor focus:outline-mainColor  focus:border-mainColor "
//                   id="language"
//                   onChange={(e) => changeLanguage(e.target.value)}
//                 >
//                   <option className="border-none" selected value="">
//                     Select Language
//                   </option>
//                   <option className="text-black" value={lang}>
//                     English
//                   </option>
//                   <option value="tr" className="hover:bg-mainColor px-16">
//                     Türkçe
//                   </option>
//                 </select>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//         <span class="sr-only">View notifications</span>

//         <div class="relative ml-3">
//           <div>
//             <button
//               type="button"
//               class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//               id="user-menu-button"
//               aria-expanded="false"
//               aria-haspopup="true"
//             >
//               <span class="sr-only">Open user menu</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>

//   <div class="sm:hidden " id="mobile-menu">
//     <div
//       class={show ? "block " : "hidden transition duration-300 ease-out "}
//     >
//       <div class="space-y-1 px-2 pt-2 pb-3  ">
//         <a
//           href="#"
//           class="text-black hover:bg-mainColor  hover:text-white block px-3 py-2 text-center rounded-md font-medium transition duration-300 ease-out hover:ease-in"
//           aria-current="page"
//         >
//           Dashboard
//         </a>

//         <a
//           href="#"
//           class="text-black text-center hover:bg-mainColor hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-out hover:ease-in"
//         >
//           Team
//         </a>

//         <a
//           href="#"
//           class="text-black text-center hover:bg-mainColor hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-out hover:ease-in"
//         >
//           Projects
//         </a>

//         <a
//           href="#"
//           class="text-black text-center hover:bg-mainColor hover:text-white block px-3 py-2 rounded-md   font-medium transition duration-300 ease-out hover:ease-in"
//         >
//           Contact
//         </a>
//       </div>
//     </div>
//   </div>
// </nav>
//   );
// };

// export default Navbar;

import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Logo1 from "../assets/images/logo-bg-white.png";
// import Logo2 from "../assets/images/logo-bg-dark.png";
import { useTranslation } from "react-i18next";
import { useConsumeContext } from "../helpers/contextApi/ContextFile";
import { motion } from "framer-motion";

function NavBar() {
  const [click, setClick] = useState(false);
  const { lang, setLang, changeLanguage } = useConsumeContext();
  //   // console.log(changeLanguage);
  const { t, i18n } = useTranslation();

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
          <motion.img
             class="hidden h-8 w-auto lg:block cursor-pointer"
             src={Logo1}
             alt="Elegant Software"
           
           />
            
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                {t("nav2")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to=""
                activeClassName="active"
                className="nav-links"
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
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
            <div className="flex flex-row justify-center ">
              <div className="flex flex-row justify-center items-center text-center">
                 <label htmlFor="language " className="text-center">
                  <i class="fa-regular fa-question pr-12 text-center"></i>
                 </label>
              </div>
              <div className="flex ">
                <select
                  name=""
                  
                  className="block rounded-lg  px-8  text-sm text-gray-500  border-0  appearance-none dark:border-mainColor focus:outline-mainColor  focus:border-mainColor "
                  id="language"
                  onChange={(e) => changeLanguage(e.target.value)}
                >
                  <option className="border-none" selected value="">
                    Select Language
                  </option>
                  <option className="text-black" value={lang}>
                    English
                  </option>
                  <option value="tr" className="hover:bg-mainColor px-16">
                    Türkçe
                  </option>
                </select>
              </div>
              </div>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
