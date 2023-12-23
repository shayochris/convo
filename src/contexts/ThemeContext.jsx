import { Children, createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
    const [isLight,setIsLight] = useState(()=>{
        const localData = localStorage.getItem("light")
        return localData ? JSON.parse(localData) : false
    })
    const theme = isLight ? "bg-[#FFFFFF] text-black " : "bg-[#181818] text-[#FFFFFF]"
    const ui = isLight ? "bg-[#eee]" : "bg-[#282828]"
    const border = isLight ? "border-[#ddd]" : "border-[#404040]"
  
    const setTheme = (data) =>{
        if(data === "light"){
            setIsLight(true);
            localStorage.setItem("light", JSON.stringify("true"))
        }else{
            setIsLight(false)
            localStorage.removeItem("light")
        }
    }

    const contextData ={
        isLight: isLight,
        theme: theme,
        border: border,
        ui: ui,
        setIsLight: setIsLight,
        setTheme: setTheme,
    }
    // useEffect(()=>{
    // },[isLight])
    return(
        <ThemeContext.Provider value={contextData} >
            {children}
        </ThemeContext.Provider>
    )
}