import React from "react";
import TeamLogo from "../../assets/images/team/team.svg";
import FormImage from "../../assets/images/contact.png";

const FirstSection = () => {
  return (
    <aside className="bg-[#f7fbfe] py-36">
      <div className=" w-4/5 mx-auto   gap-2   ">
        <div className="grid lg:grid-cols-2 gap-24 grid-cols-1">
          <div className="grid-cols-1">
            <div className=" h-full">
              <img
                src={FormImage}
                alt="formImage"
                className="h-[100%] object-contain"
              />
            </div>
          </div>

          <div className="grid-col-1">
            <div className=" mx-auto flex flex-col items-center justify-center mt-24">
              <h5 className="text-[#625fd1] text-4xl leading-[54px] font-semibold  mb-8 dark:text-white">
                We’re A Creative Design Studio
              </h5>
              <p className="text-left text-[#707070] mb-8 text-xl dark:text-white">
                Mauris neque nisi, faucibus non elementum in, convallis et eros.
                Sed pretium sem libero, vel pellentesque purus ultrices ut. In
                quis leo id massa pulvinar in euismod cursus non justo. Sed
                sagittis etto urna non efficitur. Nulla nec lacus tincidunt,
                rutrum arcu in, euismod diam. Donec neque tellus, congue sed
                velit sed, scelerisque scelerisque urna. Praesent mi sem,
                tincidunt eget facilisis in, pharetra et sapien. Proin sagittis
                erat magna, id eleifend ante posuere nec. Suspendisse potenti.
                Suspendisse tincidunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FirstSection;
