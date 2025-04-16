import { useSelector} from 'react-redux'
import { RootState } from '../../../store'
import CartItem from './cart-item'

const Cart = () => {
  const items = useSelector((state: RootState) => state.cart.items)
  const total = useSelector((state: RootState) => state.cart.total)
  return (
    <div className="cart">
      <h2>Cart</h2>
      <span>Total sum: {total}</span>
      {items.map((item, index) => (
        <CartItem
          key={index}
          name={item.name}
          price={item.price}
          amount={item.amount}
        />
      ))}
    </div>
  )
}

export default Cart
