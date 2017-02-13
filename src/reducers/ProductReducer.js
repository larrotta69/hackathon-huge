const products = (state = [], action) => {
	switch (action.type) {
	    case 'ADD_TO_CART':
	      return state.map(elem => {
			  if (elem === action.product) {
				// 	elem.quantity = elem.quantity - 1
				// return elem
				return Object.assign({}, elem , {quantity : elem.quantity - 1})
			  }
			  return elem
		  })
	    default:
	      return state
  }
}

export default products
