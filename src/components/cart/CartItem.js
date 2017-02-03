import React, { PropTypes } from 'react'

class CartItem extends React.Component {
	constructor(props){
		super(props)
		this.handleAddClick = this.handleAddClick.bind(this, props.item)
		this.handleRemoveClick = this.handleRemoveClick.bind(this, props.item.id)
	}
	handleAddClick(product){
		if (product.quantity > 0){
			this.props.addProduct(product)
		}
	}
	handleRemoveClick(itemId){
		this.props.removeProduct(itemId)
	}
	render(){
		const { item, addProduct, removeProduct } = this.props
		return (
			<div className="row text-center">
				<img src={item.img}/>
				<h4 className="product-name">
					<strong>{item.name}</strong>
				</h4>
				<h4>
					<small>{item.desc}</small>
				</h4>

				<div className="col-xs-6">
					<h6>
						<strong>${item.price}</strong>
					</h6>
				</div>
				<div className="col-xs-6">
					<h6>
						<strong>Q: {item.quantity}</strong>
					</h6>
				</div>
				{addProduct ?
					<div className="col-xs-12">
						<button onClick={this.handleAddClick}
							type="button"
							className="btn btn-info btn-block">
							Add to Cart
						</button>
					</div>
					: null}
				{removeProduct ?
					<div className="col-xs-12">
						<button onClick={this.handleRemoveClick}
							type="button"
							className="btn btn-danger btn-block">
							Remove from Cart
						</button>
					</div>
					: null
				}


			</div>
		)
	}
}
CartItem.propTypes = {
	item: PropTypes.object,
	buttonHandler: PropTypes.func,
	buttonStyle: PropTypes.string,
	addProduct: PropTypes.func,
	removeProduct: PropTypes.func

}
export default CartItem
