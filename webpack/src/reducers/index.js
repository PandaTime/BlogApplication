import {combineReducers} from 'redux';
import {authericationReducer} from './user-reducer';
import {postListReducer, postDetailedInfoReducer, postPageReducer} from './posts-reducer';
import {loginFormVisibilityReducer} from './visability-reducer';

const rootReducer = combineReducers({
    authericationReducer,
    postListReducer,
    postDetailedInfoReducer,
    postPageReducer,
    loginFormVisibilityReducer
});

export default rootReducer;