import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home/Home';
import ShopPage from './pages/Shop/Shop';

import './App.css';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
