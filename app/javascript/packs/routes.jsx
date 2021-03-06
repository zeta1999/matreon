import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from '../bundles/Matreon/components/Home/Home';
import Contribution from '../bundles/Matreon/components/Contribution/Contribution';
import Invoices from '../bundles/Matreon/components/Invoices/Invoices';

export default (
  <Layout>
    <Switch>
      <Route
        path="/"
        component={Home}
        exact
      />
      <Route
        path="/contribution"
        component={Contribution}
        exact
      />
      <Route
        path="/invoices"
        component={Invoices}
        exact
      />
    </Switch>
  </Layout>
);
