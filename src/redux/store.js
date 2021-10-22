import { createStore } from "redux";
import listreducers from "./listreducers";

export const store=createStore(listreducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

