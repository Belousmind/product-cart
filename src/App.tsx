import './App.scss'
import { Provider } from 'react-redux'
import { store } from './store'
import ProductList from '@ui/product-list/product-list'
import Cart from '@ui/cart/cart'
function App() {
  return (
    <Provider store={store}>
      <main>
        <ProductList />
        <Cart />
      </main>
    </Provider>
  )
}

export default App
