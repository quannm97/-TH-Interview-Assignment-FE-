import * as types from './actionTypes.js';

export const setUser = (users) =>{
    return{
        type: types.SET_USER,
        payload : users
    };
}