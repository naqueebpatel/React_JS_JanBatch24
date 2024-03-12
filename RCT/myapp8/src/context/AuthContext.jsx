

import { createContext, useState } from "react";


//create
export const AuthContext=createContext();

//provide

export const AuthContextProvider=({children})=>{

    const [isAuth,setAuth]=useState(false);

    const toggleAuth=()=>{
        setAuth(!isAuth)
    }

    const payload={
        isAuth,
        toggleAuth
    }

    return (

        <AuthContext.Provider value={payload}>
            {children}
        </AuthContext.Provider>
    )
}

