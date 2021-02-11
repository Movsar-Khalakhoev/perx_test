import { useState } from 'react'
import s from './ProductCard.module.sass'
import { useSelector } from 'react-redux'
import { baseURL } from '../../http/axios'

const ProductCard = ({
  imageSrc = '',
  title,
  price,
  countInCart,
  onAddToCartHandler,
}) => {
  const [productCount, setProductCount] = useState(1)
  const { maxCount } = useSelector(state => state.cart)

  const decreaseHandler = () => {
    if (productCount > 1) {
      setProductCount(prev => prev - 1)
    }
  }

  const increaseHandler = () => {
    if (productCount < maxCount) {
      setProductCount(prev => prev + 1)
    }
  }

  const inputHandler = e => {
    const value = +e.target.value
    if (value => 0 && value <= maxCount) {
      setProductCount(value)
    }
  }

  const addToCart = () => {
    if (productCount > 0) {
      onAddToCartHandler(productCount)
      setProductCount(1)
    }
  }

  return (
    <div className={s.product}>
      <div className={s.image_container}>
        <img className={s.image} src={`${baseURL}${imageSrc}`} alt={title} />
      </div>
      <div className={s.content}>
        <div className={s.info}>
          <div className={s.title}>{title}</div>
          <div className={s.price}>
            Цена: <span>{price}$</span>
          </div>
        </div>
        <div className={s.actions}>
          <div className={s.product_count}>
            <button className={s.decrease} onClick={decreaseHandler}>
              <i className='icofont-minus' />
            </button>
            <input
              className={s.count_input}
              type='text'
              value={productCount}
              onChange={inputHandler}
              max={maxCount}
            />
            <button className={s.increase} onClick={increaseHandler}>
              <i className='icofont-plus' />
            </button>
          </div>
          <button className={s.add_to_cart} onClick={addToCart}>
            Добавить
            {countInCart > 0 && (
              <span className={s.in_cart}>
                В корзине: <span>{countInCart}</span>
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
