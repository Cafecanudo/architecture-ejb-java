import './resources/styles/style.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'

const App = () => <div>s</div>
export default hot(module)(App)

ReactDOM.render(
  App(), document.getElementById('main')
);