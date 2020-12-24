import React, { Component } from 'react'
import FormInput from '../components/form-input';
import '../styles/sign-in.styles.scss'
import CustomBtn from '../components/custom-button';
import {auth, signInWithGoogle} from "../firebase/firebase.utils"

export default class signin extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:"",
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {email, password} = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:"", password:""})
        } catch(error){
            console.log(error)
        }
    }

    handleChange = (event) => {
       const {value, name} = event.target;
       this.setState({[name]: value})
    }
    
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" label="email" value={this.state.email} handleChange={this.handleChange} required/>
                    <FormInput name="password" type="password" label="password" value={this.state.password} handleChange={this.handleChange} required/>
                    <div className="buttons">
                    <CustomBtn type="submit">Sign In</CustomBtn>
                    <CustomBtn onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomBtn>
                    </div>
                </form>
                
            </div>
        )
    }
}
