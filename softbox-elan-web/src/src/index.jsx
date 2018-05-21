import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'
import App from './main/app'

hot(module)(<App />)
ReactDOM.render(<App />, document.getElementById('app'))