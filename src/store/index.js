import { applyMiddleware, createStore } from 'redux'
import { combineReducers } from 'redux'
import reduxThunk from 'redux-thunk'

import productsReducer from './reducers/products.reducer'
import cartReducer from './reducers/cart.reducer'

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
})

const store = createStore(rootReducer, applyMiddleware(reduxThunk))

export default store
