// add Product
export const addProduct = (product) => (
	{
		type: 'ADD_PRODUCT',
		product
	}
)
// remove product
export const removeProduct = (productId) => (
	{
		type: 'REMOVE_PRODUCT',
		productId
	}
)

// send checkout
export const sendCheckout = () => (
	{
		type: 'SEND_CHECKOUT'
	}
)
