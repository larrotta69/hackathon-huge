// import * as types from '../constants/ActionTypes'

export const addToCart = product => ({
  type: 'ADD_TO_CART',
  product
})

// export const addToCart = productId => (dispatch, getState) => {
//   if (getState().products.byId[productId].inventory > 0) {
//     dispatch(addToCart(productId))
//   }
// }
