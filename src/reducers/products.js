const products = (state = [], action) => {
	let newState = []
	switch (action.type) {
		case 'ADD_PRODUCT':
		console.log('ADD_PRODUCT from product')
			newState = [
				...state.map((product) => {
					if (product === action.product && action.product.quantity > 0) {
						product.quantity -= 1
					}
					return product
			})]
			console.log(newState)

			// return [
			// 	...state.slice(0, action.product.id)
			// ]
		default:
			return state
	}
}

export default products
