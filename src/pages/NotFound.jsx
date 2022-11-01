import React from "react";
import notFounded from "../assets/images/404.png";
import animatedIcon from "../assets/images/404-icon1.png";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="flex md:flex-row md:justify-end sm:flex-col sm:justify-center flex-wrap">
      <aside className="flex flex-col justify-center ">
        <div className=" notFoundCard animate-bounce">
          <img className="animate-bounce" src={animatedIcon} alt="" />
        </div>
        <div className="flex flex-col flex-wrap ">
          <h5 className="text-black text-5xl md:text-left sm:text-center leading-10 font-bold mb-4  py-8">
            Page Not Found!
          </h5>
          <p className="text-[#707070]  text-xl md:text-left font-light sm:text-center leading-9 w-[80%] md:mx-0  sm:mx-auto">
            The page you are looking for does not exist or move another
            directory
            <button
              onClick={() => navigate(-1)}
              className="text-[#625fd1] font-bold ml-2"
            >
              Go back
            </button>
          </p>

          <div className="mt-8 md:w-[100%] sm:w-[90%] sm:mx-auto md:mx-0  ">
            <form action="">
              <input
                type="text"
                placeholder="Search Here"
                className="bg-[#625fd1] py-4 pl-4 lg:pr-48  sm:pr-12 text-white outline-0"
              />
              <button className="bg-[#ff937f] py-4 px-12">
                <i
                  className="fa-solid fa-magnifying-glass text-white"
                  style={{ width: "40px" }}
                ></i>
              </button>
            </form>
          </div>
        </div>
      </aside>

      <div className="flex justify-center flex-wrap sm:mt-12 md:mt-0">
        <img src={notFounded} alt="404notFound" />
      </div>
    </main>
  );
};

export default NotFound;
