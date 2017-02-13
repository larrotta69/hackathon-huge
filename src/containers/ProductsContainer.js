import React, { PropTypes } from 'react'
import ProductsList from '../components/ProductsList'
import CartItem from '../components/CartItem'
import { connect } from 'react-redux'
import { addToCart } from '../actions';

const ProductsContainer = ({ products, addToCart }) => (
      <ProductsList title="Products">
        {products.map(product =>
        <CartItem
            key = {product.id}
            product = {product}
            onAddToCartClicked = {() => addToCart(product)}
        />
        )}
      </ProductsList>
)

ProductsContainer.propTypes = {
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
    console.log(state);
    return {
		products: state.products
	}
}

export default connect(mapStateToProps, {addToCart})(ProductsContainer)
