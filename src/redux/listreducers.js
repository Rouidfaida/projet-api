import { combineReducers } from "redux";
import {reducerPhoto, reducerMovie } from "./reducer";

const listreducers =combineReducers({
    allPhoto: reducerPhoto,
    allMovie:reducerMovie
})
export default listreducers;