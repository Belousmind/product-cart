import styles from './cart.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'
import CartInfo from '@ui/cart-info/cart-info'
import CartSummary from '@ui/cart-summary/cart-summary'
import EmpryCart from '@images/illustration-empty-cart.svg'
import EmptyPlaceholder from '@ui/empty-placeholder/empty-placeholder'
import CartItem from '@ui/cart-item/cart-item'
import PrimaryButton from '@ui/primary-button/primary-button'

const Cart = () => {
  const { items, totalSum, totalAmount } = useSelector(
    (state: RootState) => state.cart
  )

  return (
    <div className={styles.cart}>
      <h2 className={styles.title}>Your Cart ({totalAmount})</h2>

      {items.length === 0 && (
        <EmptyPlaceholder
          imgSrc={EmpryCart}
          text="Your added items will appear here"
        />
      )}

      {items.length > 0 && (
        <>
          <div className={styles.list}>
            {items.map((item) => (
              <CartItem
                key={item.name}
                title={item.name}
                amount={item.amount}
                price={item.price}
              />
            ))}
          </div>

          <CartSummary summary={totalSum} />
          <CartInfo />
          <PrimaryButton
            text="Confirm Order"
            onClick={() => console.log('hi')}
          />
        </>
      )}
    </div>
  )
}

export default Cart
