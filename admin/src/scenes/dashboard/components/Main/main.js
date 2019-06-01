import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Import scenes
import Home from '../../scenes/Home/index';
import Products from '../../scenes/Products/index';
import CreateNewProduct from '../../scenes/Products/scenes/CreateProduct/createNewProduct';
import Categories from '../../scenes/Categories/index';
import CreateNewCat from '../../scenes/Categories/scenes/CreateNewCat/index';
import EditCategory from '../../scenes/Categories/scenes/EditCategory/index';
import ProductTypes from '../../scenes/ProductTypes/index';
import CreateProductType from '../../scenes/ProductTypes/scenes/CreateNewProductType/index';
import EditProductType from '../../scenes/ProductTypes/scenes/EditProductType/index';
import Tax from '../../scenes/Tax/index';
import CreateTax from '../../scenes/Tax/scenes/CreateTax/index';
import EditTax from '../../scenes/Tax/scenes/EditTax/index';
import Stock from '../../scenes/Stock/index';
import CreateStockLocation from '../../scenes/Stock/scenes/CreateStockLocation/index';
import EditStockLocation from '../../scenes/Stock/scenes/EditStockLocation/index';
import Orders from '../../scenes/Orders/index';

// Import styles
import { MainContainer } from './styles';

const Main = () => {
  return (
    <MainContainer>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/categories/edit/:id' component={EditCategory} />
        <Route
          exact
          path='/categories/create-new-category'
          component={CreateNewCat}
        />
        <Route exact path='/categories' component={Categories} />
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
        <Route exact path='/product-types' component={ProductTypes} />
        <Route exact path='/orders' component={Orders} />
        <Route exact path='/stock/edit/:id' component={EditStockLocation} />
        <Route
          exact
          path='/stock/create-new-stock-location'
          component={CreateStockLocation}
        />
        <Route exact path='/stock' component={Stock} />
        <Route exact path='/taxes/edit/:id' component={EditTax} />
        <Route exact path='/taxes/create-new-tax' component={CreateTax} />
        <Route exact path='/taxes' component={Tax} />
        <Route exact path='/user-management' component={Tax} />
      </Switch>
    </MainContainer>
  );
};

export default Main;
