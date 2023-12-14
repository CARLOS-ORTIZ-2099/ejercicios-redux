import './App.css'
import {Provider} from 'react-redux'
import { store } from './store'
import { View } from './components/view'


function App() {
  

  return (
    // provedor que recibira como prop la creacion del strore
    <Provider store={store}>
        <h1>counter with redux</h1>
        <View/>
    </Provider>
  )
}

export default App
