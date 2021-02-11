import { SET_CART } from '../actionTypes/cart.actionTypes'
import { ADD_TO_CART } from '../actionTypes/cart.actionTypes'

export function addToCart(product, count) {
  return (dispatch, getState) => {
    const state = getState().cart
    const itemIndex = state.cart.findIndex(item => item.id === product.id)
    const localSave = cart => localStorage.setItem('cart', JSON.stringify(cart))

    if (itemIndex === -1) {
      const cart = [...state.cart, { ...product, count: count }]
      localSave(cart)
      return dispatch({
        type: ADD_TO_CART,
        cart,
      })
    }

    const item = state.cart[itemIndex]

    if (item.count + count < 0 || item.count + count > state.maxCount) {
      return
    }

    if (item.count + count === 0) {
      const cart = state.cart.filter(item => item.id !== product.id)
      localSave(cart)
      return dispatch({
        type: ADD_TO_CART,
        cart,
      })
    }

    const cart = [
      ...state.cart.slice(0, itemIndex),
      { ...item, count: item.count + count },
      ...state.cart.slice(itemIndex + 1),
    ]
    localSave(cart)
    return dispatch({
      type: ADD_TO_CART,
      cart,
    })
  }
}
export function setCart() {
  return {
    type: SET_CART,
    cart: JSON.parse(localStorage.getItem('cart')) || [],
  }
}
