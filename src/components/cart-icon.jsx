import React from 'react';
import "../styles/cart-icon.styles.scss"
import {ReactComponent as ShoppingIcon} from '../assets/shopping-bag.svg'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../redux/cart.actions'
import {SelectCartItemsCount} from '../redux/cart.selectors'

const CartIcon = ({toggleCartHidden, itemCount}) => {
    return <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => ({
    itemCount: SelectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);