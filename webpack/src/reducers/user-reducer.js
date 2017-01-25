import * as types from '../actions/actionTypes';
import initialState from './initialState';


export function authericationReducer(state = initialState.loggedUser, action){
    switch (action.type){
        case types.AUTHENTICATION:
            return action.loggedUser;
        case types.LOGOUT:
            return false;
        default:
            return state
    }
}