import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Si tu archivo de estilos global se llama diferente, ajusta este nombre

// 1. Importamos las herramientas de Redux
import { Provider } from 'react-redux';
import store from './store.js';

// 2. Envolvemos el componente <App /> con el Provider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);