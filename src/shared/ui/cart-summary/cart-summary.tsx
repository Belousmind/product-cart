import styles from './cart-summary.module.scss'

type CartSummaryProps = {
  summary: number
}

const CartSummary = ({ summary }: CartSummaryProps) => {
  return (
    <div className={styles.summary}>
      <span className={styles.label}>Order Total</span>
      <span className={styles.value}>${summary.toFixed(2)}</span>
    </div>
  )
}

export default CartSummary
