import './App.scss'
import { Provider } from 'react-redux'
import { store } from './store'
import ProductList from '@ui/product-list/product-list'
import Cart from '@ui/cart/cart'
import OrderConfirmation from '@ui/order-confirmation/order-confirmation'
function App() {
  return (
    <Provider store={store}>
      <main>
        <ProductList />
        <Cart />
        <OrderConfirmation />
      </main>
    </Provider>
  )
}

export default App
