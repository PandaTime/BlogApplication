'use strict';

export function fetchPostsList(page){
    return fetch(`/ajax/page/${page ? page : 1}`, {
        credentials: 'same-origin',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }})
    .then((res)=>res.json());
};


export function fetchPostDetails(id){
    return fetch(`/ajax/post/${id}`,{
        credentials: 'same-origin',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }})
    .then((res)=>res.json());
};