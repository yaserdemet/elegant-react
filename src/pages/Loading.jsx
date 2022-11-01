import React from "react";

const Loading = () => {
  return (
    <div className=" flex justify-center items-center mt-36 dark:bg-white">
      <div>
        <img
          src="https://static.wixstatic.com/media/4e02b0_79956d3736504be5b37aab8974914483~mv2.gif"
          alt="loading"
        />
        <p className="text-center font-bold text-3xl text-mainColor   animate-ping ">
          Loading ...
        </p>
      </div>
    </div>
  );
};

export default Loading;
