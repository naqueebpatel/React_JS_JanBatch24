import { createContext, useState } from "react";

export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{

    const [isAuth,setAuth]=useState(false);

    const login=()=>{
        setAuth(true)
    }

    const logout=()=>{
        setAuth(false)
    }
   
    const payload={
        isAuth,
        login,
        logout
    }


    return (
        <AuthContext.Provider value={payload}>
            {children}
        </AuthContext.Provider>
    )
}