import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Contract from '../pages/reports/Contract';
import Outro from '../pages/reports/Outro';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Contract} />
    <Route exact path="/outro" component={Outro} />
  </Switch>
);

export default Routes;
