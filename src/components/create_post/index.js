import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import { createPost } from '../../redux/actions';

const CreatePost = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [input, setInput] = useState({
		title: '',
		content: '',
		author: '',
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
			id: uuidv4(),
		};
		dispatch(createPost(payload));
		history.push('/list');
	};

	return (
		<div style={styles.container}>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<h1>Create post</h1>
				<button
					style={styles.Btn3}
					onClick={() => history.push('/list')}
				>
					Go to list
				</button>
			</div>

			<form onSubmit={handleSubmit}>
				<input
					name='title'
					type='text'
					placeholder='Title'
					onChange={handleChange}
					value={input.title}
					style={styles.inputGroup}
					required
				/>
				<input
					name='author'
					type='text'
					value={input.author}
					placeholder='Author'
					onChange={handleChange}
					style={styles.inputGroup}
					required
				/>
				<textarea
					name='content'
					type='text'
					placeholder='Content'
					value={input.content}
					onChange={handleChange}
					style={styles.textArea}
					maxLength='140'
					required
				/>
				<p style={{ textAlign: 'right' }}>{input.content.length}/140</p>
				<input type='submit' style={styles.Btn} />
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
	Btn3: {
		display: 'flex',
		alignItems: 'center',
		width: 150,
		justifyContent: 'center',
		padding: '5px 10px',
		height: 30,
		borderRadius: 10,
		border: 'none',
		backgroundColor: '#20639B',
		color: 'white',
		fontWeight: 'bold',
		cursor: 'pointer',
	},
};

export default CreatePost;
