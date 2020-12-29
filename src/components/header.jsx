import React from 'react'
import '../styles/header.styles.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from "../assets/crown.svg"
import {auth} from "../firebase/firebase.utils"
import CartIcon from '../components/cart-icon'
import {connect} from 'react-redux'
import CartDropdown from '../components/cart-dropdown'
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../redux/cart.selectors'
import {selectCurrentUser} from "../redux/user.selector"

const Header = ({currentUser, hidden}) => {
   return <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className='options'>
            <Link className="option" to='/shop'>Shop</Link>
            <Link className="option" to='/shop'>Contact</Link>
            {
                currentUser ?
                <div className="option" onClick={()=> auth.signOut()}>Sign Out</div> 
                :
                <Link className='option' to="/signin">Sign In</Link>
            }
            <CartIcon/>
        </div>
        {
            hidden ? null : <CartDropdown/>
        }
    </div>
}
const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden

});

export default connect(mapStateToProps)(Header);