import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Import scenes
import Home from '../../scenes/Home/index';
import Products from '../../scenes/Products/index';
import CreateNewProduct from '../../scenes/Products/scenes/CreateProduct/createNewProduct';

const Main = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/products' component={Products} />
        <Route
          exact
          path='/products/create-new-product'
          component={CreateNewProduct}
        />
        <Route exact path='/orders' component={Home} />
        <Route exact path='/stock' component={Home} />
      </Switch>
    </>
  );
};

export default Main;
