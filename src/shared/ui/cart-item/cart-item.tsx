import styles from './cart-item.module.scss'
import { RemoveItemIcon } from '@svg'
import { removeItem } from '@cart/cartSlices'
import { useDispatch } from 'react-redux'

type CartItemProps = {
  title: string
  price: number
  amount: number
}

const CartItem = ({ title, price, amount }: CartItemProps) => {

  const dispatch = useDispatch()

  return (
    <div className={styles['cart-item']}>
      <span className={styles.title}>{title}</span>
      <span className={styles.details}>
        <span className={styles.amount}>{amount}x</span>
        <span className={styles['unit-price']}>@ ${price}</span>
        <span className={styles['total-price']}>
          ${(amount * price).toFixed(2)}
        </span>
      </span>
      <button onClick={() => dispatch(removeItem(title))} className={styles['remove-button']}>
        <RemoveItemIcon />
      </button>
    </div>
  )
}

export default CartItem
