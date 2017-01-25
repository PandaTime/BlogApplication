import * as types from './actionTypes';
import {fetchPostsList, fetchPostDetails} from '../api/posts';
import store from '../store/configureStore';

function getPostsList(list){
    return {type: types.AJAX_POSTS_LIST, postsList: list};
}

export function getListOfPosts(page){
    fetchPostsList(page).then((res)=>{
        store.dispatch(getPostsList(res.data))
    });
}

function getPostDetailed(postInfo){
    return {type: types.AJAX_POST_DETAILS, postDetailedInfo: postInfo}
}

export function getDetailedPostInfo(id){
    fetchPostDetails(id).then((res)=>{
        store.dispatch(getPostDetailed(res));
    })
}