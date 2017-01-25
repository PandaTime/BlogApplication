import * as types from './actionTypes';

export function loginUser(loginUser){
    return {type: types.AUTHENTICATION, loginUser};
}
export function logoutUser(){
    return {type: types.LOGOUT}
}