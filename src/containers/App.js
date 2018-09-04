import React, { Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Helmet } from "react-helmet";
import withAnalytics, { initAnalytics } from 'react-with-analytics';

import Init from '../components/Init/Init';
import indexRoutes from '../routes';

// TODO Fix this!
initAnalytics('UA-xxxxxxx-1');

const Root = () => (
  <Switch>
    {indexRoutes.map((prop, key) => {
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

// you should only use `withAnalytics` once to warp your whole app
const RootWithAnalytics = withRouter(withAnalytics(Root));

const App = () => (
  <Fragment>
    <Init />
    <Helmet titleTemplate="%s - Your finanical health" defaultTitle="We compare, you save">
      <html lang="en" />
      <body className="root" />
    </Helmet>
    <RootWithAnalytics />
  </Fragment>
);

export default App;
