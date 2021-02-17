import { Route } from 'react-router-dom';
import './App.css';

//components ==>
import CreatePost from './components/create_post';
import PostEdit from './components/post_edit';
import PostList from './components/post_list';

const App = () => {
	return (
		<>
			<Route exact path='/list' component={PostList} />
			<Route path='/edit/:id' component={PostEdit} />
			<Route exact path='/' component={CreatePost} />
		</>
	);
};

export default App;
