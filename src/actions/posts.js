import axios from 'axios';

export function fetchPosts() {
    return function(dispatch) {
        dispatch(fetchPostsStarted());
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(({data}) => setTimeout(() => dispatch(fetchPostsFulfilled(data.splice(0, 20))), 300))
            .catch((err) => dispatch(fetchPostsRejected(err)));
    };
}

export function fetchPostsStarted() {
    return {
        type: 'FETCH_POSTS'
    };
}

export function fetchPostsFulfilled(payload) {
    return {
        type: 'FETCH_POSTS_FULFILLED',
        payload
    };
}

export function fetchPostsRejected(payload) {
    return {
        type: 'FETCH_POSTS_REJECTED',
        payload
    };
}

export function editPost(payload) {
    return {
        type: 'EDIT_POST',
        payload
    };
}

export function deletePost(postId) {
    return {
        type: 'DELETE_POST',
        payload: postId
    };
}

export function fetchComments(id) {
    return function(dispatch) {
        dispatch(fetchCommentsStarted(id));
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(({data}) => dispatch(fetchCommentsFulfilled({id, comments: data.splice(0, 10)})))
            .catch((error) => dispatch(fetchCommentsRejected({id, error})));
    };
}

export function fetchCommentsStarted(postId) {
    return {
        type: 'FETCH_COMMENTS',
        payload: postId
    };
}

export function fetchCommentsFulfilled(payload) {
    return {
        type: 'FETCH_COMMENTS_FULFILLED',
        payload
    };
}

export function fetchCommentsRejected(payload) {
    return {
        type: 'FETCH_COMMENTS_REJECTED',
        payload
    };
}
