/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import * as type from '../action/doc';

const initialState = {
    data: []
};

export const getDocReducer = (state = initialState, action ) =>{
    switch (action.type) {
        case type.GET_DOC_SUCCESS:
            return {
                ...state,
                data: [...action.data]
            };
        default:
            return state;
    }
};