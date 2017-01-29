'use strict';
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export function loginFormVisibilityReducer(state = initialState.loginShow, action){
    switch (action.type){
        case types.CHANGE_LOGIN_VISIBILITY:
            return action.show;
        default:
            return state;
    }
}