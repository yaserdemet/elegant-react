import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
// import './styles.css';

export default function Counter() {
  return (
    <section className=" dark:bg-black bg-[#5f52dc] mt-12 pb-24  w-[100%] ">
      <div className="flex flex-col">
        <h5 className="text-center md:text-3xl  lg:text-4xl font-semibold mb-16 pt-16 text-white">
          Percentage
        </h5>
        <div className="flex flex-wrap   gap-12 justify-center sm:justify-center ">
          <div className="max-w-sm ml-0 px-8 dark:bg-black bg-white rounded-[18px] border hover:-translate-y-2 ease-in-out duration-300 border-gray-200 shadow-md">
            <div class="p-5">
              <div className="p-8 flex justify-center">
                <i class="fa-regular fa-clock text-5xl"></i>
              </div>
              <p class="mb-2 text-xl font-bold tracking-tight text-center text-blue-400">
                <CountUp end={100} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </p>

              <p class=" font-normal text-[#707070] text-2xl text-center">
                Working Hours
              </p>
            </div>
          </div>

          <div className="max-w-sm ml-0  dark:bg-black bg-white rounded-[18px] border hover:-translate-y-2 ease-in-out duration-300 border-gray-200 shadow-md">
            <div class="p-5">
              <div className="p-8 flex justify-center">
              <i class="fa-solid fa-check text-5xl"></i>
              </div>
              <p class="mb-2 text-xl font-bold tracking-tight text-center text-blue-400">
                <CountUp end={400} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </p>

              <p class=" font-normal text-[#707070] text-2xl text-center">
               Submitted Projects
              </p>
            </div>
          </div>

          <div className="max-w-sm ml-0 px-8 dark:bg-black bg-white rounded-[18px] border hover:-translate-y-2 ease-in-out duration-300 border-gray-200 shadow-md">
            <div class="p-5">
              <div className="p-8 flex justify-center">
              <i class="fa-solid fa-trophy text-5xl"></i>
              </div>
              <p class="mb-2 text-xl font-bold tracking-tight text-center text-blue-400">
                <CountUp end={400} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </p>

              <p class=" font-normal text-[#707070] text-2xl text-center">
               Rewards
              </p>
            </div>
          </div>

          <div className="max-w-sm ml-0 px-8 dark:bg-black bg-white rounded-[18px] border hover:-translate-y-2 ease-in-out duration-300 border-gray-200 shadow-md">
            <div class="p-5">
              <div className="p-8 flex justify-center">
              <i class="fa-solid text-5xl fa-people-group"></i>
              </div>
              <p class="mb-2 text-xl font-bold tracking-tight text-center text-blue-400">
                <CountUp end={400} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </p>

              <p class=" font-normal text-[#707070] text-2xl text-center">
               Customers
              </p>
            </div>
          </div>

        
        </div>
      </div>
    </section>
  );
}
