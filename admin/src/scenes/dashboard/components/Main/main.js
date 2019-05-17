import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Import scenes
import Home from '../../scenes/Home/index';
import Products from '../../scenes/Products/index';
import ProductTypes from '../../scenes/ProductTypes/index';
import CreateProductType from '../../scenes/ProductTypes/scenes/CreateNewProductType/createNewProductType';
import EditProductType from '../../scenes/ProductTypes/scenes/EditProductType/editProductType';
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
        <Route exaxt path='/categories' component={Home} />
        <Route
          exact
          path='/product-types/edit/:id'
          component={EditProductType}
        />
        <Route
          exaxt
          path='/product-types/create-product-type'
          component={CreateProductType}
        />
        <Route exaxt path='/product-types' component={ProductTypes} />
        <Route exact path='/orders' component={Home} />
        <Route exact path='/stock' component={Home} />
      </Switch>
    </>
  );
};

export default Main;
