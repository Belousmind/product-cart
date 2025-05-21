import { useDispatch, useSelector } from 'react-redux'
import styles from './add-to-cart-button.module.scss'
import { CartIcon, IncrementIcon, DecrementIcon } from '@svg'
import { addToCart, decrimentItem, incrimentItem } from '@cart/cartSlices'
import { RootState } from 'src/store'

type AddToCartButtonProps = {
  name: string
  price: number
}

const AddToCartButton = ({ name, price }: AddToCartButtonProps) => {
  const dispatch = useDispatch()
  const item = useSelector((state: RootState) =>
    state.cart.items.find((item) => item.name === name)
  )

  if (item) {
    return (
      <div className={styles.counter}>
        <button
          className={styles['quantity-button']}
          onClick={() => dispatch(decrimentItem(name))}
        >
          <DecrementIcon />
        </button>
        <span>{item.amount}</span>
        <button
          className={styles['quantity-button']}
          onClick={() => dispatch(incrimentItem(name))}
        >
          <IncrementIcon />
        </button>
      </div>
    )
  }

  return (
    <button
      className={styles['add-button']}
      onClick={() => dispatch(addToCart({ name, price }))}
    >
      <CartIcon />
      Add to Cart
    </button>
  )
}

export default AddToCartButton
