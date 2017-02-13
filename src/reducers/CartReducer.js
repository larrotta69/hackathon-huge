const cartProducts = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			const commentIndex = indexElemCart(state,action.product.id)

		   if (commentIndex != -1) {
				return Object.assign([], state, state[commentIndex].quantity = state[commentIndex].quantity + 1)
		   } else {
			   return [
   					...state,
   					Object.assign({}, action.product , {quantity : 1})
   				]
		   }

		default:
			return state
	}
}

export default cartProducts

const indexElemCart = (cartProducts,productId) => {
	return cartProducts.findIndex(function(elem) {
	   return elem.id == productId;
   });
}
