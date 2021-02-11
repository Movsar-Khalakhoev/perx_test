import s from './Products.module.sass'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../../components/ProductCard/ProductCard'
import { addToCart } from '../../store/actions/cart.actions'

const ProductsPage = () => {
  const { products, loading } = useSelector(state => state.products)
  const { cart } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  return (
    <div className={s.products}>
      {loading ? (
        <h2>Загрузка...</h2>
      ) : (
        products.map(product => (
          <ProductCard
            key={product.id}
            imageSrc={product.image}
            title={product.name}
            price={product.price}
            onAddToCartHandler={count => dispatch(addToCart(product, count))}
            countInCart={
              (cart.find(item => item.id === product.id) || {}).count || 0
            }
          />
        ))
      )}
    </div>
  )
}

export default ProductsPage
