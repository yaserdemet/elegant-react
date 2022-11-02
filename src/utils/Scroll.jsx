import React, { useEffect, useState } from "react";

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    // console.log("dadwad")
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 300;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      isVisible && // to limit setting state only the first time
        setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {!isVisible && (
        <a
          onClick={handleClick}
          className="hover:animate-pulse bottom-10 bg-[#ff4d8c] flex justify-center items-center rounded-full right-10 z-10 fixed w-[45px] h-[45px]"
        >
          <i className="fa fa-angle-up text-white"></i>
        </a>
      )}
    </div>
  );
};

export default Scroll;
