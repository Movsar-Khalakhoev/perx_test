import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
} from '../actionTypes/products.actionTypes'
import $host from '../../http/axios'

export function fetchProducts(dealers = []) {
  return async dispatch => {
    dispatch({ type: FETCH_PRODUCTS_START })
    try {
      const dealersLink = `?dealers=${dealers.reduce(
        (acc, dealer) => acc + `${dealer},`,
        ''
      )}`
      const res = await $host.get(`/goods/${dealers.length ? dealersLink : ''}`)

      const products = res.data.map((product, index) => ({
        ...product,
        id: index,
      }))
      dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        products,
      })
    } catch (e) {
      console.log(e)
    }
  }
}
