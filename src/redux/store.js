

import { createStore, applyMiddleware } from "redux";
import Myreducerapi from "./Reducer";
import createSagaMiddleware from "@redux-saga/core";
import RootSaga from "./Sagas/index"




const sagaMiddlewarw = createSagaMiddleware()
const Store = createStore(Myreducerapi, applyMiddleware(sagaMiddlewarw));

sagaMiddlewarw.run(RootSaga)
export default Store;

