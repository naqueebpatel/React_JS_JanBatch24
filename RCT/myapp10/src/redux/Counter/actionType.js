import { DEC_COUNT, INC_COUNT } from "./action"

export const IncAction=()=>{
    return {type:INC_COUNT}
}

export const DecAction=()=>{
    return {type:DEC_COUNT}
}