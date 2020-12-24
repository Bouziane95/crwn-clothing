import React from 'react'
import SignIn from '../components/signin';
import SignUp from '../components/signup';
import '../styles/sign-in-and-sign-up.styles.scss';

const SignInAndSignUp = () =>{
    return <div className="sign-in-and-sign-up">
    <SignIn/>
    <SignUp/>
    </div>
}

export default SignInAndSignUp;