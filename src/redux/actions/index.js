import { CREATE_POST, DELETE_POST, EDIT_POST, GET_POST } from '../constants';

export const createPost = (payload) => {
	return {
		type: CREATE_POST,
		payload,
	};
};
export const deletePost = (payload) => {
	return {
		type: DELETE_POST,
		payload,
	};
};
export const editPost = (payload) => {
	return {
		type: EDIT_POST,
		payload,
	};
};
export const getPosts = () => {
	return {
		type: GET_POST,
	};
};
