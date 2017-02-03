import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import ShoppingCart from './ShoppingCart'

const mapStateToProps = (state) => {
	return {
		products: state.products,
		cartProducts: state.cartProducts
	}
}
const mapDispatchToProps = (dispatch) => (
	bindActionCreators(actionCreators, dispatch)
)

const App = connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)

export default App
