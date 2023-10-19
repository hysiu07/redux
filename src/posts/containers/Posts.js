import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostsList from '../components/PostsList';
import { fetchData } from '../redux';

function PostsContainer({ posts, isLoading, isError, fetchPost }) {
	console.log(posts,' posts');
	return (
		<div className='container'>
			<h2>Posts</h2>
			{isLoading && <p>Loading...</p>}
			<button onClick={() => {
				fetchPost()
			}}>Fetch Posts</button>
			<PostsList posts={posts} />
		</div>
	);
}
const mapStateToProps = (state) => ({
	posts: state.posts.posts,
	isLoading: state.posts.isLoading,
	isError: state.posts.isError,
});
const mapDispatchToProps = (dispatch) => ({
	fetchPost: () => {
		dispatch(fetchData());
	},
});
export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
