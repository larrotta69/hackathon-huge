const addToCartAction = product => ({
  type: 'ADD_TO_CART',
  product
})

export const addToCart = product => (dispatch, getState) => {
  if (product.quantity > 0) {
      dispatch(addToCartAction(product))
  }
}

export const getTotalCost = cartProducts => (dispatch,getState) => {
    if (cartProducts.length == 0){
		return 0
	} else {
		return cartProducts.reduce((acc, elem) => {
			return acc + (elem.quantity * elem.price)
		}, 0 )
	}
}
