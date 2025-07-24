import { createContext, } from "react";
import runChat from "../config/gemini";

export const Context=createContext();


const ContextProvider=(props)=>{
    
   
const contextValue={
  
}

    
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
    
}

export default ContextProvider;