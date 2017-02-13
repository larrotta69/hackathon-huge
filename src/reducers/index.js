import { combineReducers } from 'redux'
import products from './ProductReducer'
import cartProducts from './CartReducer'

const rootReducer = combineReducers({products, cartProducts})

export default rootReducer
