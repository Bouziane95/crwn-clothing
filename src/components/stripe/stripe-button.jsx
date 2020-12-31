import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    //Stripe want the price in cents, this is why i multiplicate the price by 100
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I4RHRFkoEU08xq8HvDXLIXg5aCtMzG4qyfx4jFV62iml0dlQG1LH8wToBZHKHQSWqQcUJjOIjpuSUGw1RUhx5Re00lzOVVeUv';

    const onToken = token => {
        console.log(token)
        alert("Payment Successful, Thanks !")
    }

    return (
        <StripeCheckout
            label = 'Pay Now'
            name= 'Bouziane Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;