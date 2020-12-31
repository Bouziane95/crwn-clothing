import React from 'react'
import '../styles/checkout.styles.scss'
import StripeCheckoutButton from '../components/stripe/stripe-button'
import {connect} from 'react-redux'
import CheckoutItem from '../components/checkout-item'
import {createStructuredSelector} from 'reselect'
import {selectCartItems, selectCartTotal} from '../redux/cart.selectors'

const CheckoutPage= ({cartItems, total}) => {
    return <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Products</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))
        }
        <div className='total'>
            <span>TOTAL: ${total}</span>
        </div>
        <div className='test-warning'>
            *Please use the following test credit card for payments*
            <br/>
            4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
        </div>
        <StripeCheckoutButton price={total}/>
    </div>
}
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems, 
    total : selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage);