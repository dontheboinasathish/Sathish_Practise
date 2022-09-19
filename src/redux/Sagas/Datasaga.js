import { takeEvery, put } from "@redux-saga/core/effects";
import axios from "axios"

function* TableShow(callback) {
    console.log("aryy saga unava sachinavaaaaa.....");
    try {
        const url = ('https://jsonplaceholder.typicode.com/users')
        const res = yield axios.get(url)
        console.log("res", res.data)
        yield put({ type: "table_success", data: res.data })
        console.log(res.data)
        callback(true)
    }
    catch {
        callback(false)
    }
}
export default function* Datasaga() {
    yield takeEvery("table_request", TableShow)

}