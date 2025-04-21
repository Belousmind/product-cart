import styles from './order-item.module.scss'
import data from '../../../data.json'

type OrderItemProps = {
  title: string
  imgSrc?: string
  amount: number
  price: number
}

function getImageByName(name: string) {
  const found = data.find((item) => item.name === name)
  return found?.image?.thumbnail || ''
}

const OrderItem = ({ title, amount, price }: OrderItemProps) => {
  const imgSrc = getImageByName(title)

  return (
    <div className={styles['order-item']}>
      <img className={styles['item-image']} src={imgSrc} alt={title} />
      <span className={styles.title}>{title}</span>
      <span className={styles.details}>
        <span className={styles.amount}>{amount}x</span>
        <span className={styles.price}>@ ${price.toFixed(2)}</span>
      </span>
      <span className={styles['total-sum']}>
        ${(price * amount).toFixed(2)}
      </span>
    </div>
  )
}

export default OrderItem
