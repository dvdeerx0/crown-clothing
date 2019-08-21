import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home/Home';
import ShopPage from './pages/Shop/Shop';
import SignInAndSignUpPage from './pages/SignInAndSignUp/SignInAndSignUp';

import Header from './components/Header/Header';

import './App.scss';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
