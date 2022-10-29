import React from 'react'
import loadingLogo from "../assets/images/logo-bg-dark.png"

const Loading = () => {
  return (
    <div className=' flex justify-center items-center mt-36 dark:bg-white'  >
        {/* <img src={loadingLogo} alt=""  />
         */}

       
         <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" className='animate-bounce' alt="loading" />
         <p className='text-center font-bold text-3xl text-mainColor  dark:text-white animate-ping '>Loading ...</p>
         
    </div>
  )
}

export default Loading