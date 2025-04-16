import './App.scss'
import { Provider } from 'react-redux'
import { store } from './store'
import Cart from './shared/components/cart/cart'
import Products from './shared/components/products/products'

function App() {
  return (
    <Provider store={store}>
      <Cart />
      <Products />
    </Provider>
  )
}

export default App
