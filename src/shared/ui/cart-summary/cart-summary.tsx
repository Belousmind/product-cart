import styles from './cart-summary.module.scss'
import AnimatedCounter from '@ui/animation/animated-counter'

type CartSummaryProps = {
  summary: number
  animated: boolean
}

const CartSummary = ({ summary, animated }: CartSummaryProps) => {
  return (
    <div className={styles.summary}>
      <span className={styles.label}>Order Total</span>
      <span className={styles.value}>
        ${animated ? <AnimatedCounter num={summary} /> : summary.toFixed(2)}
      </span>
    </div>
  )
}

export default CartSummary
