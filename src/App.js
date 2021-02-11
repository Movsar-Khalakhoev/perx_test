import { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ProductsPage from './pages/Products.page/Products.page'
import CartPage from './pages/Cart.page/Cart.page'
import { CART_ROUTE, PRODUCTS_ROUTE } from './routePaths'
import { useDispatch } from 'react-redux'
import { fetchProducts } from './store/actions/products.actions'
import { setCart } from './store/actions/cart.actions'

function App({ dealers }) {
  const dispatch = useDispatch()
  useEffect(() => dispatch(fetchProducts(dealers)), [])
  useEffect(() => dispatch(setCart()), [])

  return (
    <div className='app'>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route exact path={PRODUCTS_ROUTE} component={ProductsPage} />
          <Route path={CART_ROUTE} component={CartPage} />
          <Redirect to='/' />
        </Switch>
      </div>
    </div>
  )
}

export default App
