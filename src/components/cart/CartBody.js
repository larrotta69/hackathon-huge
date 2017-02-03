import React, { PropTypes } from 'react'
import CartItem from './CartItem'

const CartBody = (props) => {
	return (
		<div className="panel-body">
			{props.products.map((item, index) => {
				return(
					<CartItem key={index} item={item} {...props}/>
				)
			})}
		</div>
	)
}
CartBody.propTypes = {
	products: PropTypes.array
}

export default CartBody
