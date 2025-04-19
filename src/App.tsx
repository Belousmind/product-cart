import './App.scss'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <main>
      </main>
    </Provider>
  )
}

export default App
