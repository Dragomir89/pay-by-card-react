import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

class Payments extends Component {
    constructor(props) {
        super(props)

        this.postToken = this.postToken.bind(this)
    }

    postToken(token) {
        const options = { 
            method: 'post',
            url: '/api/stripe',
            data: token
        }

        axios(options).then((res)=>{
            console.log('success')
            console.log(res)
        }).catch(function (error) {
            console.log(error)
        })
    }

    render() {
        return (
            <StripeCheckout 
                name="Test Titile"
                description="test description"
                amount={500} //by default amount is USD cents
                token={this.postToken}
                stripeKey={process.env.REACT_APP_STRIPE_KEY} >
                <button className="btn">Pay By Card</button>
            </StripeCheckout>
        )
    }
}

export default Payments
