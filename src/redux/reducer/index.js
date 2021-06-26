/* eslint-disable no-dupe-keys */
import {combineReducers} from 'redux';
import {getDocReducer} from './doc'
import { getGroupReducer } from './group';


const rootReducer = combineReducers({

    data: getDocReducer, 
    data1:getGroupReducer,

});

export default rootReducer;