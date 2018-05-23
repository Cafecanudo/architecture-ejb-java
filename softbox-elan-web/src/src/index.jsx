import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'
import {hot} from 'react-hot-loader'

hot(module)(<App />)
ReactDOM.render(<App/>, document.getElementById('app'))