import styles from './order-confirmation.module.scss'
import { OrderConfirmedIcon } from '@svg'
import { PrimaryButton, CartSummary, OrderItem } from '@ui'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store'
import { clearCart } from '@cart/cartSlices'

type OrderConfirmationProps = {
  onClose: () => void
}

const OrderConfirmation = ({ onClose }: OrderConfirmationProps) => {
  const dispatch = useDispatch()
  const { items, totalSum } = useSelector((state: RootState) => state.cart)

  return (
    <div className={styles['order-confirmation']}>
      <div className={styles['title-info']}>
        <OrderConfirmedIcon />
        <span className={styles.texts}>
          <span className={styles.title}>Order Confirmed</span>
          <span>We hope you enjoy your food!</span>
        </span>
      </div>
      <div className={styles['order-summary']}>
        <div className={styles.list}>
          {items.map((item) => (
            <OrderItem
              key={item.name}
              title={item.name}
              amount={item.amount}
              price={item.price}
            />
          ))}
        </div>

        <CartSummary summary={totalSum} />
      </div>
      <PrimaryButton
        text="Start New Order"
        onClick={() => {
          onClose()
          dispatch(clearCart())
        }}
      />
    </div>
  )
}

export default OrderConfirmation
