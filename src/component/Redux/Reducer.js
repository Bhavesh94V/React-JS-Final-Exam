const initialState = { posts: [] };

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'fetch_movie':
            return { ...state, posts: action.payload };
        case 'addmovie':
            return { ...state, posts: [...state.posts, action.payload] };
        case 'Deletemovie':
            return { ...state, posts: state.posts.filter((post) => post.id !== action.payload) };
        case 'Editmovie':
            return {
                ...state,
                posts: state.posts.map((post) =>
                    post.id === action.payload.id ? { ...post, ...action.payload } : post
                ),
            };
        default:
            return state;
    }
}

export default rootReducer;
