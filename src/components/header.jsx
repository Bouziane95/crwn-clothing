import React from 'react'
import '../styles/header.styles.scss'
import {ReactComponent as Logo} from "../assets/crown.svg"
import {auth} from "../firebase/firebase.utils"
import CartIcon from '../components/cart-icon'
import {connect} from 'react-redux'
import CartDropdown from '../components/cart-dropdown'
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../redux/cart.selectors'
import {selectCurrentUser} from "../redux/user.selector"
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from '../components/header.styles'

const Header = ({currentUser, hidden}) => {
   return <HeaderContainer className="header">
        <LogoContainer to="/">
            <Logo className="logo"/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>Shop</OptionLink>
            <OptionLink to='/shop'>Contact</OptionLink>
            {
                currentUser ?
                <OptionLink  as = 'div' onClick={()=> auth.signOut()}>Sign Out</OptionLink> 
                :
                <OptionLink to="/signin">Sign In</OptionLink>
            }
            <CartIcon/>
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown/>
        }
    </HeaderContainer>
}
const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden

});

export default connect(mapStateToProps)(Header);