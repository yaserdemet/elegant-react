import React, { useEffect } from "react";
import notFounded from "../assets/images/404.png";
import animatedIcon from "../assets/images/404-icon1.png";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Elegant 404";
  }, []);

  return (
    // <main className="flex md:flex-row md:justify-end sm:flex-col sm:justify-center flex-wrap">
    //   <aside className="flex flex-col justify-center ">
    //     <div className=" notFoundCard animate-bounce">
    //       <img className="animate-bounce" src={animatedIcon} alt="" />
    //     </div>
    //     <div className="flex flex-col flex-wrap ">
    //       <h5 className="text-black text-5xl md:text-left sm:text-center leading-10 font-bold mb-4  py-8">
    //         Page Not Found!
    //       </h5>
    //       <p className="text-[#707070]  text-xl md:text-left font-light sm:text-center leading-9 w-[80%] md:mx-0  sm:mx-auto">
    //         The page you are looking for does not exist or move another
    //         directory
    //         <button
    //           onClick={() => navigate(-1)}
    //           className="text-[#625fd1] font-bold ml-2"
    //         >
    //           <i class="fa-solid fa-chevron-left"></i> Go back
    //         </button>
    //       </p>
    //     </div>
    //   </aside>

    //   <div className="flex justify-center flex-wrap sm:mt-12 md:mt-0">
    //     <img src={notFounded} alt="404notFound" />
    //   </div>
    // </main>

    <aside className=" w-5/5   ">
      <div className="grid lg:grid-cols-2  md:grid-cols-1  ">
        <div className="grid-cols-1   md:ml-12  ">
        <div className=" notFoundCard animate-bounce">
          <img className="animate-bounce" src={animatedIcon} alt="" />
        </div>
          <div className="flex justify-center flex-col  mt-[40%]  items-center ">
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
                <i class="fa-solid fa-chevron-left"></i> Go back
              </button>
            </p>
          </div>
        </div>

        <div className="formContent grid-col-1 ">
          <img
            src={notFounded}
            alt="404notFound"
            className="min-h-screen object-cover"
          />
        </div>
      </div>
    </aside>
  );
};

export default NotFound;
