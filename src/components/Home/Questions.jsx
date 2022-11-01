import React from "react";

const Questions = () => {
  return (
    <article class="mt-36 w-[80%] mx-auto">
      <div class="mb-0">
        <h4 class="text-[#625fd1] text-4xl text-center leading-10 font-semibold mb-8">
          Get Your FAQ Answer
        </h4>

        <p class="text-[#707070] dark:text-white text-xl text-center font-light mx-auto md:w-[70%] sm:w-[100%]">
          Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin
          <br />
          libero, vel malesuada velit.
        </p>
      </div>

      <div class="grid grid-cols-2 gap-36 projects2 mt-16">
        <aside class="">
          <div class="col">
            <div class="tabs">
              <div class="tab">
                <input type="checkbox" id="chck1" class="border-t-[1px]" />
                <label
                  class="tab-label border-b-[1px] border-t-[1px]"
                  for="chck1"
                >
                  <span>
                    <i class="fa-regular fa-question pr-12"></i>
                    How To Use Docland Like A Pro?
                  </span>
                </label>
                <div class="tab-content">
                  Phasellus risus turpis, pretium sit amet magna non, molestie
                  ultricies enim. Nullam pulvinar felis at metus malesuada, nec
                  convallis lacus commodo. Duis blandit neque purus, nec auctor
                  mi sollicitudin nec.
                </div>
              </div>
              <div class="tab">
                <input type="checkbox" id="chck2" />
                <label class="tab-label border-b-[1px]" for="chck2">
                  <span>
                    <i class="fa-regular fa-question pr-12"></i>
                    How To Use Docland Like A Pro?
                  </span>
                </label>
                <div class="tab-content">
                  Phasellus risus turpis, pretium sit amet magna non, molestie
                  ultricies enim. Nullam pulvinar felis at metus malesuada, nec
                  convallis lacus commodo. Duis blandit neque purus, nec auctor
                  mi sollicitudin nec.
                </div>
              </div>
              <div class="tab">
                <input type="checkbox" id="chck3" />
                <label class="tab-label border-b-[1px]" for="chck3">
                  <span>
                    <i class="fa-regular fa-question pr-12"></i>
                    How To Use Docland Like A Pro?
                  </span>
                </label>
                <div class="tab-content">
                  Phasellus risus turpis, pretium sit amet magna non, molestie
                  ultricies enim. Nullam pulvinar felis at metus malesuada, nec
                  convallis lacus commodo. Duis blandit neque purus, nec auctor
                  mi sollicitudin nec.
                </div>
              </div>
              <div class="tab">
                <input type="checkbox" id="chck4" />
                <label class="tab-label border-b-[1px]" for="chck4">
                  <span>
                    <i class="fa-regular fa-question pr-12"></i>
                    How To Use Docland Like A Pro?
                  </span>
                </label>
                <div class="tab-content">
                  Phasellus risus turpis, pretium sit amet magna non, molestie
                  ultricies enim. Nullam pulvinar felis at metus malesuada, nec
                  convallis lacus commodo. Duis blandit neque purus, nec auctor
                  mi sollicitudin nec.
                </div>
              </div>
            </div>
          </div>
        </aside>

        <div class="mb-16 mx-auto">
          <img
            src="https://themelooks.org/demo/docland/html/assets/img/feature/accordion-right.png"
            alt=""
          />
        </div>
      </div>
    </article>
  );
};

export default Questions;
