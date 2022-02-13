import { all, fork } from "redux-saga/effects";
import axios from "axios";

// axios.defaults.baseURL = baseURL;
// axios.defaults.withCredentials = true;

export default function* rootSaga() {
    yield all();
    //yield all([fork(todoSaga)])
}