import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux"
import { store } from './redux/store.js'

console.log(store)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)


// 1. npm i redux 
// 2. npm i react-redux 
// 3. folder structure
// 4. store --> using legacy_createStore from react-redux  
// 5. reducer
// 6 action 
// 7 dispatch