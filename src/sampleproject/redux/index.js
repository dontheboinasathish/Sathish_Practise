import { combineReducers } from "redux";

import Myreducer from "./my_reducer"

const Myreducerapi = combineReducers({
  ApiReducer: Myreducer,
  
});

export default Myreducerapi;
