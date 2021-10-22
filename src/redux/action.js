import { ADD_PHOTO, DELETE_PHOTO, EDIT_PHOTO, SET_MOVIE, SET_PHOTO } from "./actiontype";

export  const handelSet=(payload)=>{
    return{ type: SET_PHOTO,
        payload:payload}
   
}
export  const handelAdd=(payload)=>{
    return{ type: ADD_PHOTO,
        payload:payload}
}
export  const handelDelete=(id)=>{
    return{ type: DELETE_PHOTO,
        payload:id}
}
export  const handelEdit=(payload)=>{
    return{ type: EDIT_PHOTO,
        payload}
}
export  const handelSetMovie=(payload)=>{
    return{ type: SET_MOVIE,
        payload:payload}
   
}