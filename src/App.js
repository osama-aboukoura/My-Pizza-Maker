import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import PizzaBuilder from './containers/PizzaBuilder/PizzaBuilder';

import { Route, Switch } from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/" exact component={PizzaBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
