import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js' // Asegúrate de que apunte a tu archivo store.js

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Envuelve tu App con el Provider pasándole el store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)