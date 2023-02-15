import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ComboForm from '../components/comboForm';
import Success from '../components/success';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ComboForm} />
      <Route path="/success" component={Success} />
    </Switch>
  );
}

export default Routes;
