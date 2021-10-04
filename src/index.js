import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import 'bootstrap/dist/css/bootstrap.css'

import Users from './components/users'
//import User from './components/user'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/*<Users />*/}
  </React.StrictMode>,
  document.getElementById('root')
)


