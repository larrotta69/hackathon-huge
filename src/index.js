/* eslint-disable import/namespace */
/* eslint-disable import/default */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// reducers
import rootReducer from './reducers/index'
//Components
import App from './components/App'
// data
import { productsData } from './data/cart'
// Styles
import styles from './styles/main.scss'

const defaultState = {
	products: productsData.products,
	cartProducts: []
}

const store = createStore(rootReducer, defaultState)

const app = (
	<Provider store={store}>
		<div className="container">
			<App />
		</div>
	</Provider>
)

render(app,document.getElementById('app'))
