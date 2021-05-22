import React from "react";
import { Route, Switch } from "react-router";
import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Album";
import { Link, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>Header</div>
      <p>
        <NavLink to="/todos" activeClassName="active-menu">
          Todos
        </NavLink>
      </p>
      <p>
        <NavLink to="/albums" activeClassName="active">
          Album
        </NavLink>
      </p>

      <Switch>
        {/* <Route path="/" component={TodoFeature} /> */}
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
      </Switch>

      <div>Footer</div>
    </div>
  );
}

export default App;
