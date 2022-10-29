import React from 'react'
import Card1 from "../assets/images/wf1.png"
import Card2 from "../assets/images/wf2.png"
import Card3 from "../assets/images/wf3.png"
import Card4 from "../assets/images/wf4.png"


const Cards2 = () => {
  return (
    <section class="mb-36 mt-36 w-[75%] mx-auto">
    <div class="mb-0">
      <h4
        class="text-[#625fd1] text-4xl text-center leading-10 font-semibold mb-8"
      >
        Docland Built For Every Team Of Every Size
      </h4>

      <p
        class="text-[#707070] text-xl text-center font-light mx-auto md:w-[40%] sm:w-[100%]"
      >
        Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin
        libero, vel malesuada velit.
      </p>
    </div>

  
    <div
      class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:place-items-top  gap-12 pt-12"
    >
    
      <div class="flex items-top flex-col">
        <div class="flex flex-col">
          <img src={Card1} alt="" />
        </div>
        <p class="text-center xl:text-2xl font-medium mt-7 lg:text-base">
          Marketing & Communicatio
        </p>
      </div>
      <div  class="flex items-top flex-col">
        <div class="flex flex-col">
          <img src={Card2} alt="" />
        </div>
        <p class="text-center xl:text-2xl lg:text-base font-medium mt-7 ">
          Product Development Teams
        </p>
      </div>
      <div  class="flex items-top flex-col">
        <div class="flex flex-col align-center">
          <img src={Card3} alt="" />
        </div>
        <p class="text-center xl:text-2xl font-medium mt-7 lg:text-base">Support Teams</p>
      </div>
      <div  class="flex items-top flex-col">
        <div class="flex flex-col align-center">
          <img src={Card4} alt="" />
        </div>
        <p class="text-center xl:text-2xl font-medium mt-7 lg:text-base">Creative Teams</p>
      </div>
    </div>
  </section>
  )
}

export default Cards2