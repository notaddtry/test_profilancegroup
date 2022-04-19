import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import App from './App'

import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router basename='/test_profilancegroup'>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
)
