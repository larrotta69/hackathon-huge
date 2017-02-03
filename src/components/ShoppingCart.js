import React, { PropTypes } from 'react'
import Header from './cart/Header'
import Footer from './cart/Footer'
import CartBody from './cart/CartBody'

class ShoppingCart extends React.Component {
	render() {
		const { products, cartProducts, addProduct, removeProduct } = this.props

		return (
			<div className="row">
				<div className="col-xs-4 panel panel-info">
					<Header text="Product List"/>
					<CartBody products={products} addProduct={addProduct}/>
				</div>
				<div className="col-xs-5 col-xs-offset-1 panel panel-info">
					<Header text="Shopping Cart"/>
					<CartBody products={cartProducts} removeProduct={removeProduct} />
					<Footer/>
				</div>
			</div>
		)
	}
}

ShoppingCart.propTypes = {
	products: PropTypes.array,
	cartProducts: PropTypes.array,
	addProduct: PropTypes.func,
	removeProduct: PropTypes.func
}

export default ShoppingCart
