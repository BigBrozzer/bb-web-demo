export default function posts(state = {
    posts: [],
    fetching: false,
    error: null
}, action) {
    switch (action.type) {
        case 'FETCH_POSTS':
            return {
                ...state,
                fetching: true
            };
        case 'FETCH_POSTS_REJECTED':
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        case 'FETCH_POSTS_FULFILLED':
            return {
                ...state,
                fetching: false,
                posts: action.payload
            };
        case 'EDIT_POST': {
            const {id} = action.payload;
            const newPosts = state.posts.map((post) => post.id === id ? action.payload : post);
            return {
                ...state,
                posts: newPosts
            };
        }
        case 'DELETE_POST':
            return {
                ...state,
                posts: state.posts.filter(({id}) => id !== action.payload)
            };
        case 'POST_EDIT_MODE': {
            const { id } = action.payload;
            const newPosts = state.posts.map((post) => post.id === id ? {...post, isEditMode: !post.isEditMode } : post);
            return {
                ...state,
                posts: newPosts
            };
        }
        case 'POST_COMMENTS_SHOWN': {
            const { id } = action.payload;
            const newPosts = state.posts.map((post) => post.id === id ? {...post, isCommentsShown: !post.isCommentsShown } : post);
            return {
                ...state,
                posts: newPosts
            };
        }
        case 'FETCH_COMMENTS':
            return {
                ...state,
                posts: state.posts.map((post) => post.id === action.payload
                    ? {...post, fetchingComments: true}
                    : post
                )
            };
        case 'FETCH_COMMENTS_REJECTED':
            return {
                ...state,
                posts: state.posts.map((post) => post.id === action.payload.id
                    ? {...post, fetchingComments: false, error: action.payload.error}
                    : post
                )
            };
        case 'FETCH_COMMENTS_FULFILLED':
            return {
                ...state,
                posts: state.posts.map((post) => post.id === action.payload.id
                    ? {...post, fetchingComments: false, comments: action.payload.comments}
                    : post
                )
            };
        default:
            return state;
    }
}
