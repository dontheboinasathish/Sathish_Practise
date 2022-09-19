import { combineReducers } from "redux";

import Myreducer from "./my_reducer"
import AddReducer from "./AddReducer";
import DataReducer from "./DataReducer";


const Myreducerapi = combineReducers({
  ApiReducer: Myreducer,
  TotalData: AddReducer,
  TableData: DataReducer,


});

export default Myreducerapi;
