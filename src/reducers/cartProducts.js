const cartProducts = (state = [], action) => {
	let newState = []
	switch (action.type) {
		case 'ADD_PRODUCT':
			console.log('ADD_PRODUCT from cartProducts')

			return [
				...state,
				action.product
			]

		case 'REMOVE_PRODUCT':
			newState = [
				...state.filter(item => item.id !== action.productId)
			]
			return newState

		default:
			return state
	}
}

export default cartProducts
