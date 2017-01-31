import React from 'react'
import { render } from 'react-dom'
import styles from './styles/main.scss'

import Header from './components/common/Header'
import Footer from './components/common/Footer'
import CartItem from './components/CartItem'

const cartData = {
	"cartItems": [
		{
			"name": "Product 1",
			"img": "http://placehold.it/100x70",
			"desc": "Product description",
			"price": "5.00",
			"quantity": 5
		},
		{
			"name": "Product 2",
			"img": "http://placehold.it/100x70",
			"desc": "Product description 2",
			"price": "29.00",
			"quantity": 3
		},
		{
			"name": "Product 3",
			"img": "http://placehold.it/100x70",
			"desc": "Product description 3",
			"price": "24.00",
			"quantity": 1
		}
	]
}

class ShoppingCart extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="panel panel-info">
						<Header/>
						<div className="panel-body">
							{cartData.cartItems.map((item, index) => {
								return(
									<div key={index}>
										<CartItem data={item}/>
										<hr></hr>
									</div>
								)
							})}
						</div>
						<Footer/>
					</div>
				</div>
			</div>
		)
	}
}

render(
	<ShoppingCart/>,
	document.getElementById('app')
)
