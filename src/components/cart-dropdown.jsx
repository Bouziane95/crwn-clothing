import React from 'react';
import CustomButton from '../components/custom-button'
import "../styles/cart-dropdown.styles.scss"

const CartDropdown = () => {
    return <div className='cart-dropdown'>
        <div className="cart-items">
            <CustomButton>Go to Checkout</CustomButton>
        </div>
    </div>
}

export default CartDropdown;