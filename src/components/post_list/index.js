import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Post from './Post';

const PostList = () => {
	const history = useHistory();
	const posts = useSelector((state) => state.posts);

	return (
		<>
			<button style={styles.Btn} onClick={() => history.push('/')}>
				Create Post
			</button>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					flexWrap: 'wrap',
				}}
			>
				{posts.length === 0 ? (
					<>
						<h1
							style={{
								width: '100%',
								textAlign: 'center',
								marginTop: '4em',
							}}
						>
							There are no Posts, create a new one
						</h1>
						<button
							style={styles.Btn2}
							onClick={() => history.push('/')}
						>
							Create Post
						</button>
					</>
				) : (
					posts.map((post) => {
						return <Post post={post} key={post.id} />;
					})
				)}
			</div>
		</>
	);
};

const styles = {
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
	Btn: {
		margin: '1em 1em 0 auto',
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
};

export default PostList;
