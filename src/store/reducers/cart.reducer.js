import { ADD_TO_CART } from '../actionTypes/cart.actionTypes'
import { SET_CART } from '../actionTypes/cart.actionTypes'

const initialState = {
  cart: [],
  maxCount: 100,
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
    case SET_CART:
      return {
        ...state,
        cart: action.cart,
      }
    default:
      return state
  }
}
