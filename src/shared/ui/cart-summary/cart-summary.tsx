import styles from './cart-summary.module.scss'
import AnimatedCounter from '@ui/animation/animated-counter'

type CartSummaryProps = {
  summary: number
}

const CartSummary = ({ summary }: CartSummaryProps) => {
  return (
    <div className={styles.summary}>
      <span className={styles.label}>Order Total</span>
      <span className={styles.value}>
        $<AnimatedCounter num={summary} />
      </span>
    </div>
  )
}

export default CartSummary
