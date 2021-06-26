/* eslint-disable no-unused-vars */

import * as type from "./doc";
import * as  types from "./group";

export const getDoc = () =>({
    type: type.GET_DOC
});

export const getDocSuccess =  (data) => ({
    type: type.GET_DOC_SUCCESS,
    data
});

export const getGroup = () =>({
    type: types.GET_GROUP
});


export const getGroupSuccess = (data) => ({
    type: types.GET_GROUP_SUCCESS,
    data
});


