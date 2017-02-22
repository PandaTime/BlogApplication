import * as types from './actionTypes';

export function loginUser(user) {
    return {type: types.AUTHENTICATION, user};
}
export function logoutUser() {
    return {type: types.LOGOUT}
}
