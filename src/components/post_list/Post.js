import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deletePost } from '../../redux/actions';

const Post = ({ post }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	return (
		<div style={styles.container}>
			<div
				style={{
					height: '70%',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<h3 style={{ textTransform: 'uppercase' }}>{post.title}</h3>
				<p>{post.content}</p>
				<p>by: {post.author}</p>
			</div>
			<div>
				<button
					style={styles.Btn}
					onClick={() => {
						history.push(`/edit/${post.id}`);
					}}
				>
					Editar
				</button>
				<button
					style={styles.Btn2}
					onClick={() => {
						dispatch(deletePost(post.id));
					}}
				>
					Eliminar
				</button>
			</div>
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
		justifyContent: 'space-between',
		border: '2px solid #20639B',
		marginTop: 20,
		borderRadius: 10,
		textAlign: 'center',
		maxWidth: 200,
		minWidth: 200,
		height: 355.438,
		wordWrap: 'normal',
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
		marginTop: 10,
	},
};

export default Post;
