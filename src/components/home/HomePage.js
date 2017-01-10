import React from 'react';
import PostsList from './../posts/PostsList';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { posts: [] };
	}

	componentWillMount(){
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				return response.json();
			})
			.then(data => {
				this.setState({posts: data});
			});
	}

	render () {
		const homePageData = this.state.posts;

		return (
			<section className="row">
				<div className="col-md-9">
					<PostsList posts={homePageData}/>
				</div>
			</section>
		);

	}
}

export default HomePage;
