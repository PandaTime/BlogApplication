import * as types from '../actions/actionTypes';
import initialState from './initialState';


export function postListReducer(state = initialState.postsList, action){
    switch (action.type){
        case types.AJAX_POSTS_LIST:
            return action.postsList;
        default:
            return state;
    }
}

export function postDetailedInfoReducer(state = initialState.postDetailedInfo, action){
    switch (action.type){
        case types.AJAX_POST_DETAILS:
            return action.postDetailedInfo;
        default:
            return state;
    }
}