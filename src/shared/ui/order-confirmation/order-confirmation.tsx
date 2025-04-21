import styles from './order-confirmation.module.scss'
import { OrderConfirmedIcon } from '@svg'
import PrimaryButton from '@ui/primary-button/primary-button'
import CartSummary from '@ui/cart-summary/cart-summary'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'
import OrderItem from '@ui/order-item/order-item'

type OrderConfirmationProps = {
  onClose: () => void
}

const OrderConfirmation = ({ onClose }: OrderConfirmationProps) => {
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
      <PrimaryButton text="Start New Order" onClick={onClose} />
    </div>
  )
}

export default OrderConfirmation
