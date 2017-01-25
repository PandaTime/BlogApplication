import {combineReducers} from 'redux';
import {authericationReducer} from './user-reducer';
import {postListReducer, postDetailedInfoReducer} from './posts-reducer';

const rootReducer = combineReducers({
    authericationReducer,
    postListReducer,
    postDetailedInfoReducer
});

export default rootReducer;