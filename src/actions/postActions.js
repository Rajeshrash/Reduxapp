 import { FETCH_POSTS, NEW_POST } from './types';


// Each action call the dispatch function and will return the type of action along with the payload
// data that is api call data or any other state data. and reducer acting upon the action will return
// the new state with the updated data.

export const fetchPosts = () => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json()).then(posts=>{
        dispatch({
            type:FETCH_POSTS,
            payload:posts
        })
    })
}

export const createPost = (postData) => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(postData)
    }).then(res =>res.json()).then(newPost => {
        dispatch({
            type:NEW_POST,
            payload:newPost
        })
    })
}
