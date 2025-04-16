import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import CartItem from './cart-item'
import styles from './cart.module.scss'
import EmptyImg from '@images/illustration-empty-cart.svg'
import { CarbonTreeIcon } from '@svg'

const Cart = () => {
  const items = useSelector((state: RootState) => state.cart.items)
  const totalSum = useSelector((state: RootState) => state.cart.totalSum)
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount)

  return (
    <div className={styles.cart}>
      <h2 className={styles.title}>Cart ({totalAmount})</h2>

      {items.length === 0 && <EmptyPlaceholder />}

      {items.length > 0 && (
        <div className={styles['cart-content']}>
          <div className={styles['cart-list']}>
            {items.map((item, index) => (
              <CartItem
                key={index}
                name={item.name}
                price={item.price}
                amount={item.amount}
              />
            ))}
          </div>
          <div className={styles['total-text']}>
            <span className={styles['total-title']}>Order Total</span>
            <span className={styles['total-sum']}>${totalSum}</span>
          </div>
          <CarbonNeutralInfo />
          <ButtonPrimary text="Confirm Order" />
        </div>
      )}
    </div>
  )
}

export default Cart

const EmptyPlaceholder = () => {
  return (
    <div className={styles.placeholder}>
      <img src={EmptyImg} alt="illustration empty cart" />
      <span className={styles['empty-text']}>
        Your added items will appear here
      </span>
    </div>
  )
}

const CarbonNeutralInfo = () => {
  return (
    <div className={styles['carbon-container']}>
      <CarbonTreeIcon />
      <p className={styles['carbon-text']}>
        This is a{' '}
        <span className={styles['carbon-text-accent']}>carbon-neutral</span>{' '}
        delivery
      </p>
    </div>
  )
}

const ButtonPrimary = ({ text }: { text: string }) => {
  return <button className={styles['button-primary']}>{text}</button>
}
