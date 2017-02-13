import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getTotalCost } from '../../actions';

const Footer = ({ totalCost }) => {
	return (
		<div className="panel-footer">
			<div className="row text-center">
				<div className="col-sm-9">
					<h4>Total
						<strong>: $ {totalCost}</strong>
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

Footer.propTypes = {
  totalCost : PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
    return {
		totalCost: getTotalCost(state.cartProducts)()
	}
}

export default connect(mapStateToProps)(Footer)
