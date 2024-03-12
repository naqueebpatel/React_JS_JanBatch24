import { createContext, useState } from "react";

export const ThemeContext=createContext();

export const ThemeContextProvider=({children})=>{

    const [isDark,setDark]=useState(true);

    const toggleTheme=()=>{
        setDark(!isDark);
    }

    const payload={
        isDark,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value={payload}>
            {children}
        </ThemeContext.Provider>
    )
}