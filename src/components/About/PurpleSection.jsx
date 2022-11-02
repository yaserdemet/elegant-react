import React from "react";
import icon1 from "../../assets/images/career/bread1.png";
import icon2 from "../../assets/images/career/bread2.png";
import icon3 from "../../assets/images/career/bread3.png";
import icon4 from "../../assets/images/career/bread4.png";

const PurpleSection = () => {
  return (
    <section className="bg-[#5f52dc] relative  py-36">
      <div className=" bg-[##ecf7ff] z-10" style={{ zIndex: "-20" }}>
        <div className = "absolute top-15 right-60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="74.044"
            height="75.201"
            viewBox="0 0 74.044 75.201"
            class="svg replaced-svg"
          >
            <g
              id="cta-icon2"
              transform="matrix(0.629, -0.777, 0.777, 0.629, 0, 44.274)"
            >
              <path
                id="Polygon_1"
                data-name="Polygon 1"
                d="M28.485,0,56.969,49.144H0Z"
                transform="translate(56.969 49.144) rotate(180)"
                fill="#ffa1ff"
              ></path>
              <path
                id="Path_774"
                data-name="Path 774"
                d="M29,5.875c-.253,0-12.73-1.77-10.622,4.469s10.116-2.7,4.13-8.852S5.564,10.512,0,5.875"
                transform="translate(11.809 2.193)"
                fill="none"
                stroke="#fff"
                stroke-width="1"
              ></path>
              <ellipse
                id="Ellipse_11"
                data-name="Ellipse 11"
                cx="3.13"
                cy="3.13"
                rx="3.13"
                ry="3.13"
                transform="translate(20.033 14.712)"
                fill="#fff"
              ></ellipse>
              <path
                id="Path_775"
                data-name="Path 775"
                d="M1.686,4s6.07.843,3.962-2.951S.169,4.679,4.637,7.967,3.963,19.1,0,15.639"
                transform="translate(27.388 37.655) rotate(-139)"
                fill="none"
                stroke="#fff"
                stroke-width="1"
              ></path>
            </g>
          </svg>
        </div>
        <div className="absolute left-[25%] top-[10%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="cta-icon3"
            width="69.911"
            height="72.406"
            viewBox="0 0 69.911 72.406"
            class="svg replaced-svg"
          >
            <ellipse
              id="Ellipse_7"
              data-name="Ellipse 7"
              cx="32.461"
              cy="32.46"
              rx="32.461"
              ry="32.46"
              transform="translate(4.99)"
              fill="#88e3ff"
            ></ellipse>
            <path
              id="Path_761"
              data-name="Path 761"
              d="M.68,21.743S-4.131,7.138,11.833,9.324,36,8.377,33.92,2.764s-6.9-.941-6.9-.941S17.147,9.963,32.608,17.2s19.9-7.216,21.868,12.028"
              transform="translate(68.336 48.4) rotate(163)"
              fill="none"
              stroke="#fff"
              stroke-width="1"
            ></path>
            <path
              id="Path_762"
              data-name="Path 762"
              d="M7611.485,13089.537s-9.406,0-7.837,5.781,8.23,1.566,4.017-7.251-19.4,1.075-19.4,5.878-2.842,9.6-7.643,7.25"
              transform="translate(-7557.978 -13066.702)"
              fill="none"
              stroke="#fff"
              stroke-width="1"
            ></path>
            <path
              id="Path_763"
              data-name="Path 763"
              d="M0,25.082s9.1-.391,4.888-8.426S-.893,2.939,6.553,0"
              transform="translate(41.92 30.451) rotate(161)"
              fill="none"
              stroke="#fff"
              stroke-width="1"
            ></path>
            <g
              id="Ellipse_10"
              data-name="Ellipse 10"
              transform="translate(0 8.317)"
              fill="none"
              stroke="#fff"
              stroke-width="1"
            >
              <ellipse
                cx="32.045"
                cy="32.045"
                rx="32.045"
                ry="32.045"
                stroke="none"
              ></ellipse>
              <ellipse
                cx="32.045"
                cy="32.045"
                rx="31.545"
                ry="31.545"
                fill="none"
              ></ellipse>
            </g>
          </svg>
        </div>
        <img src={icon1} alt="" className="absolute left-[5%] top-[10%] " />
        <img src={icon1} alt="" className="absolute right-[15%] bottom-[3%] " />

        <img
          src={icon2}
          alt=""
          className="absolute left-[15%] bottom-[0%] z-0"
        />
        {/* <img src={icon3} alt="" className="absolute left-[35%] top-[63%] z-0" /> */}

        {/* <img
          src={icon4}
          alt=""
          className="absolute right-[20%] top-[10%] z-0 overflow-hidden"
        /> */}

        <img src={icon3} alt="" className="absolute right-[5%] top-[3%] z-0" />

        <img
          src={icon4}
          alt=""
          className="absolute left-[0%] top-[30%] z-0 overflow-hidden"
        />
      </div>

      <div className="w-[80%] mx-auto text-center  z-20">
        <h5 className="font-bold text-4xl text-white z-20">
          Start Using Analyze To Grow Your Reach, <br /> Engagement and Sales.
        </h5>
        <div className="mt-8 text-black text-2xl">
          <button
            type="button"
            class="bg-[#ff4d8c] font-medium text-white hover:white transition duration-300 ease-out hover:ease-in rounded-full text-sm border-2 border-[#ff4d8c] px-16  py-6"
          >
            Get Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default PurpleSection;
