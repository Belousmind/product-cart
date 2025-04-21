import './App.scss'
import { Provider } from 'react-redux'
import { store } from './store'
import { ProductList, Cart } from '@ui'

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
