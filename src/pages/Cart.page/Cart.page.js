import s from './Cart.module.sass'
import { useDispatch, useSelector } from 'react-redux'
import CartCard from '../../components/CartCard/CartCard'
import { addToCart } from '../../store/actions/cart.actions'

const CartPage = () => {
  const { cart } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  return (
    <div>
      <div className={s.basket_list}>
        {cart.map(item => (
          <CartCard
            key={item.id}
            title={item.name}
            count={item.count}
            priceOfOne={item.price}
            onDecrease={() => dispatch(addToCart(item, -1))}
            onIncrease={() => dispatch(addToCart(item, 1))}
            onChangeInput={e =>
              dispatch(addToCart(item, +e.target.value - item.count))
            }
            onDelete={() => dispatch(addToCart(item, item.count * -1))}
          />
        ))}
      </div>
      <div className={s.info}>
        <div className={s.total_price}>
          Итого:{' '}
          <span>
            {cart
              .reduce((acc, item) => acc + item.price * item.count, 0)
              .toFixed(2)}
            $
          </span>
        </div>
      </div>
    </div>
  )
}

export default CartPage
