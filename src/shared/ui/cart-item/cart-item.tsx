import styles from './cart-item.module.scss'
import { RemoveItemIcon } from '@svg'
import { removeItem } from '@cart/cartSlices'
import { useDispatch } from 'react-redux'
import { motion, usePresence, useAnimate } from 'framer-motion'
import { useEffect } from 'react'

type CartItemProps = {
  title: string
  price: number
  amount: number
}

const CartItem = ({ title, price, amount }: CartItemProps) => {
  const dispatch = useDispatch()

  const [isPresent, safeToRemove] = usePresence()
  const [scope, animate] = useAnimate()

  useEffect(() => {
    if (isPresent) {
      animate(
        scope.current,
        { opacity: 1, x: 0 },
        { duration: 0.3, ease: 'backOut' }
      )
    }

    if (!isPresent) {
      const exitAnimation = async () => {
        await animate('span', {
          opacity: 0.4,
        })
        await animate(
          scope.current,
          {
            opacity: 0,
            x: -24,
          },
          { ease: 'backIn', delay: 0.15 }
        )
        safeToRemove()
      }

      exitAnimation()
    }
  }, [isPresent])

  return (
    <motion.div
      ref={scope}
      layout
      className={styles['cart-item']}
      style={{ opacity: 0, x: -24 }}
    >
      <span className={styles.title}>{title}</span>
      <span className={styles.details}>
        <span className={styles.amount}>{amount}x</span>
        <span className={styles['unit-price']}>@ ${price}</span>
        <span className={styles['total-price']}>
          ${(amount * price).toFixed(2)}
        </span>
      </span>
      <button
        onClick={() => dispatch(removeItem(title))}
        className={styles['remove-button']}
      >
        <RemoveItemIcon />
      </button>
    </motion.div>
  )
}

export default CartItem
