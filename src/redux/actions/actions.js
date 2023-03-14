import * as types from './actionTypes.js';

export const setUserList = (users) =>{
    return{
        type: types.SET_USER_LIST,
        payload : users
    };
}