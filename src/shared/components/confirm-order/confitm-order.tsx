import styles from './confirm-order.module.scss'
import { OrderConfirmedIcon } from '@svg'
import ButtonPrimary from '@components/primary-button/primary-button'
import { RootState } from 'src/store'
import { useSelector } from 'react-redux'

type ConfirmOrderProps = {
  onClose: () => void
}

const ConfirmOrder = ({ onClose }: ConfirmOrderProps) => {

  const { items, totalSum } = useSelector((state: RootState) => state.cart)

  return (
    <div className={styles['order-info']}>
      <div className={styles['title-info']}>
        <OrderConfirmedIcon />
        <div className={styles['texts']}>
          <span className={styles.title}>Order Confirmed</span>
          <span className={styles.text}>We hope you enjoy your food!</span>
        </div>
      </div>
      <div className={styles['confirmed-items']}>
        <div className={styles.list}>
          
        </div>
        <div className={styles['order-total']}>
          <span className={styles.order}>Order Total</span>
          <span className={styles.total}>${totalSum}</span>
        </div>
      </div>

      <ButtonPrimary text="Start New Order" onClick={onClose} />
    </div>
  )
}

export default ConfirmOrder
