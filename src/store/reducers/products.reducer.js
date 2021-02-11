import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
} from '../actionTypes/products.actionTypes'

const initialState = {
  products: [],
  loading: false,
}

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_START:
      return {
        ...state,
        loading: true,
      }
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.products,
      }
    default:
      return state
  }
}
