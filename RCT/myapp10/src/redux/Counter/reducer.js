import { DEC_COUNT, INC_COUNT } from "./action";

const initialState={
    count:0
}

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case INC_COUNT:{
           return {count: state.count+1}
        }
        case DEC_COUNT:{
            return {count: state.count-1}
        }
        default:{
            return state;
        }
    }
}