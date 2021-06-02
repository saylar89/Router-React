import React from "react";
import { useRouteMatch } from "react-router";
import { Switch, Route, Link } from "react-router-dom";
import Topic from "./Topic";

const Topics = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Topics Page</h2>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Renderig with React</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-state`}>Props Vs State</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h1>Please select a topic</h1>
        </Route>
        <Route path={`${path}/:topicsId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
};

export default Topics;
