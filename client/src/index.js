import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import '../node_modules/toastr/build/toastr.min.css'

ReactDOM.render(
        <App />,
    document.querySelector('#root'))

console.log('Stripe Key Is', process.env.REACT_APP_STRIPE_KEY)
console.log('Enviroment', process.env.NODE_ENV)
