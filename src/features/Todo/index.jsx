import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:todoId`} component={DetailPage} />
      </Switch>
    </div>
  );
}

export default TodoFeature;
