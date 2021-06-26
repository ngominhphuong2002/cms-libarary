import {call, put, takeLatest } from '@redux-saga/core/effects';
import { GET_GROUP } from '../action/group';
import { getGroupSuccess } from '../action/index';
import {getGroup} from '../../services/api';


function* getGroupApi(action) {
    console.log(action) 
    try {
        const response= yield call(getGroup);
        console.log(response)
        const {data} = response;
        console.log(data)
        yield put(getGroupSuccess(data));
    } catch (error) {
        console.log('lỗi ở Group rồi này!!!');
    }

}
export default function* followGroup(){
    yield takeLatest(GET_GROUP,getGroupApi);
}