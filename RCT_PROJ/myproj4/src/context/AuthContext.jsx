import { createContext, useState } from "react";

export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{

    const [isAuth,setAuth]=useState(false);
    const [token,setToken]=useState("")

    const login=(token)=>{
        setToken(token)
        setAuth(true)
    }

    const logout=()=>{
        setToken("")
        setAuth(false)
    }
   
    const payload={
        isAuth,
        login,
        logout,
        token
    }


    return (
        <AuthContext.Provider value={payload}>
            {children}
        </AuthContext.Provider>
    )
}