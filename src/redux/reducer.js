import { ADD_PHOTO, DELETE_PHOTO, EDIT_PHOTO, SET_MOVIE, SET_PHOTO } from "./actiontype";

let  intialState = {
    photo:[]}
let init={
    movie:[] }
export const reducerPhoto =(state=intialState, {type,payload} )=>
{
switch (type) {
    case SET_PHOTO:    
return{
    ...state,photo:payload
}
case ADD_PHOTO :
    return{
        ...state,photo:[...state.photo,payload]
    }
    case DELETE_PHOTO :
    return{
        ...state,photo:state.photo.filter(el=>el.id!==payload)
    }
    case EDIT_PHOTO :
        return{
             ...state, photo: state.photo.map((el) =>
                el.id === payload.id ? 
                {...el,...payload} : el)       }
    default:
        return state;
}}
export const reducerMovie =(state=init, {type,payload} )=>
{
    switch (type) {
        case SET_MOVIE:  
    return{
        ...state,movie:payload
    }
        default:
            return state;
    }}

