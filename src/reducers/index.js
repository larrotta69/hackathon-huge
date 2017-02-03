import { combineReducers } from 'redux'
import products from './products'
import cartProducts from './cartProducts'


const rootReducer = combineReducers({products, cartProducts})

export default rootReducer
