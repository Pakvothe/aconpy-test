import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editPost } from '../../redux/actions';
import { useHistory, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const PostEdit = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const posts = useSelector((state) => state.posts);
	const { id } = useParams();

	const post = posts.find((el) => el.id === id);

	const [input, setInput] = useState({
		title: post.title,
		content: post.content,
		author: post.author,
	});

	const handleChange = (ev) => {
		setInput({
			...input,
			[ev.target.name]: ev.target.value,
		});
	};

	const handleSubmit = (ev) => {
		ev.preventDefault();
		let payload = {
			...input,
			id,
		};
		dispatch(editPost(payload));
		history.push('/list');
	};

	return (
		<div style={styles.container}>
			<h1>Edit post</h1>

			<form onSubmit={handleSubmit}>
				<input
					name='title'
					type='text'
					value={input.title}
					onChange={handleChange}
					style={styles.inputGroup}
				/>
				<textarea
					name='content'
					type='text'
					value={input.content}
					onChange={handleChange}
					style={styles.textArea}
				/>
				<input
					name='author'
					type='text'
					value={input.author}
					onChange={handleChange}
					style={styles.inputGroup}
				/>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-around',
					}}
				>
					<button
						style={styles.Btn2}
						onClick={() => history.push('/list')}
					>
						Go back
					</button>
					<input type='submit' style={styles.Btn} />
				</div>
			</form>
		</div>
	);
};

const styles = {
	container: {
		flex: 1,
		padding: 20,
		width: '50%',
		margin: '0 auto',
		display: 'flex',
		flexDirection: 'column',
	},
	inputGroup: {
		display: 'flex',
		flex: 1,
		padding: 5,
		width: '100%',
		alignSelf: 'center',
		marginTop: 10,
		marginBottom: 10,
		border: '1px solid #ccc',
		borderRadius: 10,
		height: 35,
		padding: 5,
	},
	textArea: {
		display: 'flex',
		flex: 1,
		padding: 5,
		width: '100%',
		alignSelf: 'center',
		marginTop: 10,
		marginBottom: 10,
		border: '1px solid #ccc',
		borderRadius: 10,
		height: 70,
		padding: 5,
	},
	Btn: {
		margin: '0 auto',
		display: 'flex',
		width: 150,
		height: 35,
		borderRadius: 10,
		border: 'none',
		backgroundColor: '#20639B',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'white',
		fontWeight: 'bold',
		cursor: 'pointer',
	},
	Btn2: {
		margin: '0 auto',
		display: 'flex',
		width: 150,
		height: 35,
		borderRadius: 10,
		border: 'none',
		backgroundColor: '#CF142B',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'white',
		fontWeight: 'bold',
		cursor: 'pointer',
	},
};

export default PostEdit;
