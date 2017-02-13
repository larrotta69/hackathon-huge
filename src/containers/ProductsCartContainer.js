import React, { PropTypes } from 'react'
import ProductsList from '../components/ProductsList'
import CartItem from '../components/CartItem'
import { connect } from 'react-redux'
import { addToCart } from '../actions';

const ProductsCartContainer = ({ products, addToCart, totalCost }) => (
      <ProductsList title="Products">
        {products.map(product =>
        <CartItem
            key = {product.id}
            product = {product}
            onAddToCartClicked = {() => addToCart(product)}
            totalCost = {totalCost}
        />
        )}
      </ProductsList>
)

ProductsCartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img : PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
})).isRequired,
  addToCart : PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
		products: state.cartProducts
	}
}

export default connect(mapStateToProps, {addToCart})(ProductsCartContainer)
