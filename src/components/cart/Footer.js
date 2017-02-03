import React from 'react'

const Footer = () => {
	return (
		<div className="panel-footer">
			<div className="row text-center">
				<div className="col-sm-6">
					<h4>Total
						<strong> $50.00</strong>
					</h4>
				</div>
				<div className="col-sm-6">
					<button type="button" className="btn btn-success btn-block">
						Checkout
					</button>
				</div>
			</div>
		</div>
	)
}

export default Footer
