import * as types from './actionTypes';
import {fetchPostsList, fetchPostDetails} from '../api/posts';
import store from '../store/configureStore';

function getPostsList(list) {
    return {type: types.AJAX_POSTS_LIST, postsList: list};
}

export function getListOfPosts(page) {
    return fetchPostsList(page).then((res)=>{
        // saving our new posts;
        store.dispatch(getPostsList(res.posts));
        // saving total number of posts
        //store.dispatch(setNumberOfPosts(res.totalResults))
    });
}
export function openPage(page) {
    var page = parseInt(page);
    return getListOfPosts(page).then((res)=>{
        // change our page number
        store.dispatch(pageChangeAction(page));
        return res;
    })
}
function getPostDetailed(postInfo) {
    return {type: types.AJAX_POST_DETAILS, postDetailedInfo: postInfo}
}

// returning promise for further turning off "loading wheel"
export function getDetailedPostInfo(id) {
    return fetchPostDetails(id).then((res)=>{
        store.dispatch(getPostDetailed(res));
    })
}

//pages
export function pageChangeAction(page) {
    return {type: types.PAGE_CHANGE, page};
}
