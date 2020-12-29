import React from 'react';
import CustomButton from '../components/custom-button'
import "../styles/cart-dropdown.styles.scss"
import CartItem from './cart-item'
import {connect} from 'react-redux'

const CartDropdown = ({cartItems}) => {
    return <div className='cart-dropdown'>
        <div className="cart-items">
            {
                cartItems.map(cartItem => <CartItem key= {cartItem.id} item={cartItem}/>)
            }
            
        </div>
        <CustomButton>Go to Checkout</CustomButton>
    </div>
}

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);