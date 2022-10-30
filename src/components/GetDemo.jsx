import React from 'react'

const GetDemo = () => {
  return (
    <section
    class="bg-[#5f52dc] dark:!bg-black py-20 md:text-center mx-auto text-black demos"
    
  >
    <div class="">
      <div class="">
        <div class="text-center">
          <div class="">
            <h2 class="text-white text-5xl mb-3">
              Ready To Make Excellent Products?
            </h2>
            <p
              class="text-white font-light mb-10 lg:w-[40%] mx-auto lg:text-xl md:text-lg sm:text-sm sm:text-center"
            >
              Start working together beautifully. See how Teamwork can help your
              team with our 30-day free trial.
            </p>
            <div class="flex justify-center w-[100%]">
              <form action="#" class="container">
                <div class="relative container w-96 mx-auto">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="Enter your email ..."
                    class="w-full rounded-full md:pl-12 focus:border-0 focus:outline-none border-gray-200 py-4  pr-20 sm:text-sm "
                  />

                  <span
                    class="absolute inset-y-0 right-0 grid w-32 place-content-center"
                  >
                    <button
                   
                      type="button"
                      class="bg-[#ff4d8c] font-medium text-white hover:white transition duration-300 ease-out hover:ease-in rounded-full text-sm border-2 border-[#ff4d8c] px-16  py-1.5"
                    >
                      Get Demo
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default GetDemo