import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/home/Home';
import NotFound from '../components/not-found/NotFound';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
