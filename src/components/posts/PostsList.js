import React, { PropTypes } from 'react';

const PostsList = (props) => {
	const posts = props.posts;

	return (
		<div className="list-group">
			{posts.map((post, index) => {
				return (
					<a href="#" className="list-group-item" key={index}>
						<h4 className="list-group-item-heading">{post.title}</h4>
						<p className="list-group-item-text">{post.body}</p>
					</a>
				);
			})};
		</div>);
};

PostsList.propTypes = {
	posts: PropTypes.array.isRequired
};

export default PostsList;
