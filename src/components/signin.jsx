import React, { Component } from 'react'
import FormInput from '../components/form-input';
import '../styles/sign-in.styles.scss'
import CustomBtn from '../components/custom-button';

export default class signin extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:"",
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email:"", password:""})
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

                    <CustomBtn type="submit">Sign In</CustomBtn>
                </form>
                
            </div>
        )
    }
}
