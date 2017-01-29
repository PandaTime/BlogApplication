import * as types from '../actions/actionTypes';
import initialState from './initialState';


export function authericationReducer(state = initialState.user, action){
    switch (action.type){
        case types.AUTHENTICATION:
            return action.user;
        case types.LOGOUT:
            return false;
        default:
            return state;
    }
}