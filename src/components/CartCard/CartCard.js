import s from './CartCard.module.sass'

const CartCard = ({
  title,
  count,
  priceOfOne,
  onIncrease,
  onDecrease,
  onChangeInput,
  onDelete,
}) => {
  const onChangeInputHandler = e => {
    if (+e.target.value > 0 && +e.target.value <= 100) {
      onChangeInput(e)
    }
  }

  return (
    <div className={s.cart_item}>
      <div className={s.title}>{title}</div>
      <div className={s.other_info}>
        <div className={s.total_price}>
          Суммарная стоимость: <span>{(count * priceOfOne).toFixed(2)}$</span>
        </div>
        <div className={s.actions}>
          <div className={s.product_count}>
            <button className={s.decrease} onClick={onDecrease}>
              <i className='icofont-minus' />
            </button>
            <input
              className={s.count_input}
              type='text'
              value={count}
              onChange={onChangeInputHandler}
            />
            <button className={s.increase} onClick={onIncrease}>
              <i className='icofont-plus' />
            </button>
          </div>
          <button className={s.delete} onClick={onDelete}>
            <i className='icofont-trash' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartCard
