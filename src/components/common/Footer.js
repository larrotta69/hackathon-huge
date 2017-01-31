import React, { PropTypes } from 'react'

const Footer = (props) => {
	return (
		<div className="panel-footer">
			<div className="row text-center">
				<div className="col-sm-9">
					<h4>Total
						<strong>$50.00</strong>
					</h4>
				</div>
				<div className="col-sm-3">
					<button type="button" className="btn btn-success btn-block">
						Checkout
					</button>
				</div>
			</div>
		</div>
	)
}

export default Footer
