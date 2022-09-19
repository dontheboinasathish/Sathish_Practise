import { combineReducers } from "redux";

import Myreducer from "./my_reducer"
import AddReducer from "./AddReducer";


const Myreducerapi = combineReducers({
  ApiReducer: Myreducer,
  TotalData: AddReducer,


});

export default Myreducerapi;
