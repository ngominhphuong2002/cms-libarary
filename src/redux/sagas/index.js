import {all, call} from "redux-saga/effects";
import followDoc from "./doc";
import followGroup from "./group";

export default function* rootSaga(){
    yield all ([
        call(followDoc),
        call(followGroup)
    ]);
}