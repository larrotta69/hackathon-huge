# React-Redux workshop

## Run the project

* Clone the repo `https://github.com/larrotta69/hackathon-huge.git`

* Go to `huge-workshop-redux` branch, run `git checkout huge-workshop-redux`
* Go to `huge-workshop-redux`
* Run `npm install`
* Then `npm start`
* Webpack will open a new tab in your browser
*  You'll see the "a shopping cart and a few items on the list."

## First Part

* Redux Packages
* Create Store
* Configure the current index.js
* Create and modify the files to be prepared to handle the store

## Example
* Install the npm packages. Open the console and go to the directory where you have the project and copy paste the next line

```js
npm install --save redux redux-logger react-redux redux-thunk
```
* Go to `/src`  folder, then create those folders

	* actions
	* reducers
	* containers
	* data

```
mkdir actions reducers containers data
touch actions/index.js reducers/ProductReducer.js reducers/CartReducer.js reducers/index.js containers/ProductsCartContainer.js containers/ProductsContainer.js data/data.js
```

* Inside `/data/data.js`

```js
export const productsData = {
	"products": [
		{
			"id": 1,
			"name": "Product 1",
			"img": "http://placehold.it/100x70",
			"desc": "Product description",
			"price": 5,
			"quantity": 5
		},
		{
			"id": 2,
			"name": "Product 2",
			"img": "http://placehold.it/100x70",
			"desc": "Product description 2",
			"price": 29,
			"quantity": 3
		},
		{
			"id": 3,
			"name": "Product 3",
			"img": "http://placehold.it/100x70",
			"desc": "Product description 3",
			"price": 24,
			"quantity": 1
		}
	]
}
```
* Import the data on the index.js

```js
import { productsData } from './data/data'
```

* Remove the cartData object on the index.js

```js
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
```

* Change the name object that contains the data.

```js
	cartData.cartItems.map(...)
	productsData.products.map(...)
```

* Move the App.js file that is currently on the components folder to the containers folder and add

```js
import React from 'react'
import ProductsContainer from './ProductsContainer'

class App extends React.Component {
    render() {
        return (
            <div className="panel-body">
                <ProductsContainer products={this.props.products} />
            </div>
        )
    }
}

export default App
```

* On `containers/ProductsContainer.js`

```js
import React, { PropTypes } from 'react'
import ProductsList from '../components/ProductsList'
import CartItem from '../components/CartItem'

class ProductsContainer extends React.Component {
    render(){
        const { products } = this.props

        return (
          <ProductsList title="Products">
            {products.map(product =>
            <CartItem
                key={product.id}
                product={product}
            />
            )}
          </ProductsList>
      )
    }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img : PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
  })).isRequired
}

export default ProductsContainer
```
* On `components/ProductsList.js `

```js
import React, { PropTypes } from 'react'

const ProductsList = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    <div>{children}</div>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
```

* Change the data to product on the CartItem

```js
const item = this.props.product
```
> we change the name of the data

* Import the App.js and call it from index.js

```js
import App from './containers/App'

return (
	<div className="container">
		<div className="row">
			<div className="panel panel-info">
				<Header/>
					<App products = {productsData.products}/>
				<Footer/>
			</div>
		</div>
	</div>
)
```

## Second Part

#### Topics
* Create reducers
* Create action
* Remove all the props on products flows
* Render data from the store

* On`reducers/ProductReducer.js`

```js
const products = (state = [], action) => {
	return state
}

export default products
```

* On`reducers/CartReducer.js`

```js
const cartProducts = (state = [], action) => {
	return state
}

export default cartProducts
```

* On `reducers/index.js`

```js
import { combineReducers } from 'redux'
import products from './ProductReducer'
import cartProducts from './CartReducer'

const rootReducer = combineReducers({products, cartProducts})

export default rootReducer
```

* Add this new lines on the index.js

```js
import rootReducer from './reducers/index'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'


const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const defaultState = {
	products: productsData.products,
	cartProducts: []
}

const store = createStore(rootReducer, defaultState, applyMiddleware(...middleware))


return (
	<Provider store={store}>
		<div className="container">
			<div className="row">
				<div className="panel panel-info">
					<Header/>
					<App/>
					<Footer/>
				</div>
			</div>
		</div>
	</Provider>
)
```

* Create index.js on the actions folder

```js
export const addToCart = product => ({
	type: 'ADD_TO_CART',
	product
})
```

* Add the first reducer on CartReducer.js

```js
const cartProducts = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			return [
				...state,
				action.product
			]

		default:
			return state
	}
}

export default cartProducts
```

* Modify the App.js file and remove the props elements

```js
import React from 'react'
import ProductsContainer from './ProductsContainer'

const App = () => (
    <div className="panel-body">
        <ProductsContainer/>
    </div>
)

export default App
```

* Modify the `ProductsContainer.js` file and remove the props elements and add the first action on the component

```js
import React, { PropTypes } from 'react'
import ProductsList from '../components/ProductsList'
import CartItem from '../components/CartItem'
import { connect } from 'react-redux'
import { addToCart } from '../actions'

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
    return {
		products: state.products
	}
}

export default connect(mapStateToProps, {addToCart})(ProductsContainer)

```

* Modify the CartItem.js file to add the onClick event to add the element on the cart

```js
<button type="button" className="btn btn-success btn-block" onClick={onAddToCartClicked}>
	Add to cart
</button>

```

## Third Part
#### Topics

* Actions deeply  
* Reducer deeply

#### Example
* Modify the `index.js` on the actions folder to validate the number of added on the cart

```js
const addToCartAction = product => ({
  type: 'ADD_TO_CART',
  product
})

export const addToCart = product => (dispatch, getState) => {
  if (product.quantity > 0) {
      dispatch(addToCartAction(product))
  }
}
```
* Add a reducer on the `ProductReducer.js` to handle the logic of the add an element

```js
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
```

* Copy `ProductsContainer.js` inside `ProductsCartContainer.js`

* Rename all the class names of ProductsContainer to ProductsCartContainer on the ProductsCartContainer.js file

* Import the ProductsCartContainer.js on the App.js to display the already added on the Cart

```js
import React from 'react'
import ProductsContainer from './ProductsContainer'
import ProductsCartContainer from './ProductsCartContainer'

const App = () => (
    <div className="panel-body">
        <ProductsContainer/>
        <hr/>
        <ProductsCartContainer/>
    </div>
)

export default App

```

* Change the element of the state that is displayed on the ProductsCartContainer.js

```js
const mapStateToProps = (state) => {
    return {
		products: state.cartProducts
	}
}
```

* Add logic to modify the quantity of the object on the Cart. (CartReducer.js)

```js
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

```

* Add the action to calculate the total of the cart on the index.js in the actions folder

```js
export const getTotalCost = cartProducts => (dispatch,getState) => {
    if (cartProducts.length == 0){
		return 0
	} else {
		return cartProducts.reduce((acc, elem) => {
			return acc + (elem.quantity * elem.price)
		}, 0 )
	}
}
```

*  Modify the Footer.js

```js
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getTotalCost } from '../../actions';

const Footer = ({ totalCost }) => {
	return (
		<div className="panel-footer">
			<div className="row text-center">
				<div className="col-sm-9">
					<h4>Total
						<strong>: $ {totalCost}</strong>
					</h4>
				</div>
				<div className="col-sm-3">
					<button type="button" className="btn btn-success btn-block">
						Checkout
					</button>
				</div>
			</div>
		</div>
	)
}

Footer.propTypes = {
  totalCost : PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
    return {
		totalCost: getTotalCost(state.cartProducts)()
	}
}

export default connect(mapStateToProps)(Footer)

```
