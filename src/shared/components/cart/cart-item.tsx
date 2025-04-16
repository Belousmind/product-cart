import styles from './cart-item.module.scss'
import { RemoveItemIcon } from '@svg'

type ProductProps = {
  name: string
  category?: string
  price: number
  amount?: number
}

const CartItem = ({ name, price, amount }: ProductProps) => {
  return (
    <>
      <div className={styles['cart-item']}>
        <div className={styles['item-info']}>
          <span className={styles['cart-item-title']}>{name}</span>
          <span className={styles['cart-item-amount']}>{amount}x</span>
          <span className={styles.price}>@ ${price}</span>
          <span className={styles['total-sum']}>${price}</span>
        </div>
        <button className={styles.button} onClick={() => console.log('click')}>
          <RemoveItemIcon />
        </button>
       
      </div>
      
    </>
  )
}

export default CartItem
