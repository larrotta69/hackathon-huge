import React, { PropTypes } from 'react'

const Header = (props) => {
	return (
		<nav className="navbar navbar-inverse navbar-fixed-top">
			<div className="container">
				<ul className="nav navbar-nav">
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/form">Form</a>
					</li>
				</ul>
			</div>
		</nav>

	)
}

export default Header
