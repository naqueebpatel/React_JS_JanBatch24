import { ADD_USER } from "./action";


const initialState={
    username:""
}

export const reducer=(state = initialState, {type,payload})=> {
  switch (type) {
    case ADD_USER:
      return {username:payload};
    default:
      return state;
  }
}