import { all } from "redux-saga/effects";
import Datasaga from "./Datasaga";


export default function* RootSaga() {
    yield all([Datasaga()]);

}
