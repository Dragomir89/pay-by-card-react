const keys = require('../config/keys')
const stripe = require('stripe')(keys.stripeSecretKey)

module.exports = app => {
    app.post('/api/stripe',(req, res)=>{
        console.log('----------stripe------------')
        console.log(req.body)

        stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: 'charged $5',
            source: req.body.id
        }, (err, charge)=>{
            console.log('----------charge------------')
            console.log(charge)
            res.send('OK')
        })
    })
}
