import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store'
import {
  addToCart,
  incrimentItem,
  decrimentItem,
} from '../../../features/cart/cartSlices'
import { IncrementIcon, DecrementIcon, CartIcon } from '@svg'
import styles from './cart-button.module.scss'

type ProductProps = {
  name: string
  category?: string
  price: number
  amount?: number
}

const CartButton = ({ name, price }: ProductProps) => {
  const dispatch = useDispatch()

  const amount = useSelector((state: RootState) =>
    state.cart.items.find((item) => item.name === name)?.amount ?? 0
  )

  if (amount === 0) {
    return (
      <button
        className={styles['add-to-cart']}
        onClick={() => dispatch(addToCart({ name, price }))}
      >
        <CartIcon />
        Add to Cart
      </button>
    )
  }

  return (
    <div className={styles['add-to-cart__active']}>
      <button
        className={styles['quantity-button']}
        onClick={() => dispatch(decrimentItem(name))}
      >
        <DecrementIcon />
      </button>
      <span className={styles['add-to-cart-text']}>{amount}</span>
      <button
        className={styles['quantity-button']}
        onClick={() => dispatch(incrimentItem(name))}
      >
        <IncrementIcon />
      </button>
    </div>
  )
}

export default CartButton
