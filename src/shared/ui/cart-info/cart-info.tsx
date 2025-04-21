import styles from './cart-info.module.scss'
import { CarbonTreeIcon } from '@svg'

const CartInfo = () => {
  return (
    <div className={styles['cart-info']}>
      <CarbonTreeIcon />
      <span className={styles.text}>This is a <span className={styles['text-bold']}>carbon-neutral</span> delivery</span>
    </div>
  )
}

export default CartInfo
