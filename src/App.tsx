import './App.scss'
import { Provider } from 'react-redux'
import { store } from './store'
import ProductList from '@ui/product-list/product-list'

function App() {
  return (
    <Provider store={store}>
      <main>
        <ProductList />
 
      </main>
    </Provider>
  )
}

export default App
