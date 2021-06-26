import {call, put, takeLatest} from '@redux-saga/core/effects';
import {getDoc} from '../../services/api';
import { GET_DOC } from '../action/doc';
import { getDocSuccess } from "../action/index";

function* getDocApi(){

    try {
        const response = yield call(getDoc);
        const { data } = response;
        yield put(getDocSuccess(data));
        
    } catch (error) {
        console.log("lỗi ở Doc rồi này!!!!");
        
    }
}

export default function* followDoc() {
    yield takeLatest(GET_DOC, getDocApi)
}