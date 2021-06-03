import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import ListPage from './pages/ListPage';

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      Product Features
      <Switch>
        <Route path={match.url} component={ListPage} exact />
      </Switch>
    </div>
  );
}

export default ProductFeature;
