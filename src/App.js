import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase/firebase-utils';

import HomePage from './pages/Home/Home';
import ShopPage from './pages/Shop/Shop';
import SignInAndSignUpPage from './pages/SignInAndSignUp/SignInAndSignUp';

import Header from './components/Header/Header';

import './App.scss';

class App extends Component {
  state = {
    currentUser: null
  }
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
