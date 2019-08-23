import React, { Component } from 'react';
import { signInWithGoogle } from '../../firebase/firebase-utils';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import './SignIn.scss';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = event => {
    event.preventDefualt();

    this.setState({ email: '', password: '' })
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            handleChange={this.handleChange}
            label="Email"
            name="email" 
            type="email" 
            value={this.state.email} 
            required 
          />
          <FormInput 
            handleChange={this.handleChange}
            label="Password"
            name="password" 
            type="password" 
            value={this.state.password} 
            required 
          />
          <div className="buttons">
            <CustomButton type="submit">
              Sign in
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>

        </form>
      </div>
    )
  }
};

export default SignIn;
