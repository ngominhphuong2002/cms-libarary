import * as types from '../action/group';

const initialState = {
    data :[]
}

export const getGroupReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.GET_GROUP_SUCCESS:
            return {
                ...state,
                data:[...action.data]
            }

        default:
            return state;
    }

};


