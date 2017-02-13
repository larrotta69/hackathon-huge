import React, { PropTypes } from 'react'

class CartItem extends React.Component {
	render(){
		const item = this.props.product
		const { onAddToCartClicked } = this.props
		return (
			<div className="row">
				<div className="col-sm-6">
					<div className="col-sm-6">
						<img className="img-responsive" src={item.img}/>
					</div>
					<div className="col-sm-6">
						<h4 className="product-name">
							<strong>{item.name}</strong>
						</h4>
						<h4>
							<small>{item.desc}</small>
						</h4>
					</div>
				</div>


				<div className="col-sm-6">
					<div className="col-xs-3">
						<h6>
							<strong>${item.price}</strong>
						</h6>
					</div>
					<div className="col-xs-3">
						<h6>
							<strong>Q: {item.quantity}</strong>
						</h6>
					</div>
					<div className="col-xs-6">
						<button type="button" className="btn btn-success btn-block" onClick={onAddToCartClicked}>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		)
	}
}

export default CartItem
