import React from 'react'
import loadingLogo from "../assets/images/logo-bg-dark.png"

const Loading = () => {
  return (
    <div className=' flex justify-center items-center mt-36'  >
        {/* <img src={loadingLogo} alt=""  />
         */}

         <div>
         <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" className='animate-bounce' alt="loading" />
         <p className='text-center font-bold text-3xl text-mainColor  animate-ping '>Loading ...</p>
         </div>
    </div>
  )
}

export default Loading