import React, { Component } from 'react';

import Main from './containers/Main/Main';
import Category from './containers/Category/Category';
import Item from './containers/Item/Item';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Main}  />
          <Route  path='/category:cat' component={Category} />
          <Route  path='/item' component={Item} />
        </Switch>
      </Router>
    );
  }
}

export default App;
