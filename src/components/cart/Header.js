import React, { PropTypes } from 'react'

const Header = (props) => {
	return (
		<div className="panel-heading">
			<div className="panel-title">
				<h5>
					{props.text}
				</h5>
			</div>
		</div>
	)
}

export default Header
