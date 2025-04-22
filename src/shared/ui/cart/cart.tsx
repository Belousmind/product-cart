import styles from './cart.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'
import EmpryCart from '@images/illustration-empty-cart.svg'
import { useState } from 'react'
import {
  CartInfo,
  CartSummary,
  Modal,
  OrderConfirmation,
  EmptyPlaceholder,
  CartItem,
  PrimaryButton,
} from '@ui'
import { AnimatePresence } from 'framer-motion'
const Cart = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { items, totalSum, totalAmount } = useSelector(
    (state: RootState) => state.cart
  )

  return (
    <>
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
              <AnimatePresence>
                {items.map((item) => (
                  <CartItem
                    key={item.name}
                    title={item.name}
                    amount={item.amount}
                    price={item.price}
                  />
                ))}
              </AnimatePresence>
            </div>

            <CartSummary summary={totalSum} />
            <CartInfo />
            <PrimaryButton
              text="Confirm Order"
              onClick={() => setIsOpen(true)}
            />
          </>
        )}
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <OrderConfirmation onClose={() => setIsOpen(false)} />
      </Modal>
    </>
  )
}

export default Cart
