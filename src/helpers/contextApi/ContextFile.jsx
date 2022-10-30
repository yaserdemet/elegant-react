import React from 'react'
import { createContext, useContext, useState } from "react";
import i18n from "../i18n"

export const CreatedContext = createContext()
export const useConsumeContext = () => {
      return useContext(CreatedContext)
}


const ContextFile = ({children}) => {

    const [lang , setLang] = useState("en")
    const [dark , setDark] = useState(false)

    const changeLanguage = (ln) => {
      setLang(ln)
      return  i18n.changeLanguage(ln)
    }

  return (
    <div>
      <CreatedContext.Provider value={{lang, setLang,changeLanguage,dark , setDark}}>

          {children}

      </CreatedContext.Provider>
    </div>
  )
}

export default ContextFile