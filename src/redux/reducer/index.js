import { CREATE_POST, DELETE_POST, EDIT_POST } from '../constants';

const initialState = {
	posts: JSON.parse(localStorage.getItem('posts')) || [],
};

const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_POST:
			let newPost = [...state.posts, action.payload];
			localStorage.setItem('posts', JSON.stringify(newPost));
			return {
				...state,
				posts: newPost,
			};

		case DELETE_POST:
			let filterPosts = state.posts.filter(
				(post) => post.id !== action.payload,
			);
			localStorage.setItem('posts', JSON.stringify(filterPosts));
			return {
				...state,
				posts: filterPosts,
			};

		case EDIT_POST:
			let editPosts = state.posts.map((post) => {
				if (action.payload.id === post.id) {
					post = action.payload;
				}
				return post;
			});
			localStorage.setItem('posts', JSON.stringify(editPosts));
			return {
				...state,
				posts: editPosts,
			};
		default:
			return state;
	}
};

export default Reducer;
