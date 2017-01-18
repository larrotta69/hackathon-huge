import React from 'react'
import PostsList from './../posts/PostsList'

class HomePage extends React.Component {
	constructor(props){
		super(props)
		this.state = { posts: [] }
		this.randomColor = this.randomColor.bind(this)
	}

	componentWillMount(){
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				return response.json()
			})
			.then(data => {
				this.setState({posts: data})
			})
	}

	randomColor(event){
		const color = `rgb(${Math.floor(Math.random()*256)} , ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
		event.target.setAttribute('style', `color: ${color}`)
	}

	render () {
		//const homePagePosts = this.props.data.posts
		const homePagePosts = this.state.posts

		return (
			<section className="row">
				<h1>{this.props.data.appTitle}</h1>
				{homePagePosts.map((post, index) => {
					return(
						<div
						key={index}
						className="col-xs-12 col-sm-4 col-md-4 col-lg-3">
							<div className="thumbnail bootsnipp-thumb">
								<h4
								className="list-group-item-heading"
								onClick={this.randomColor}>
									{post.title}
								</h4>
								<p className="list-group-item-text">{post.body}</p>
							</div>
						</div>
					)
				})}
			</section>
		)
	}
}

export default HomePage
