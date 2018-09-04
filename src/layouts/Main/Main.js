import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'react-apollo';
import { bindActionCreators } from 'redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import {
  Menu,
  Sidebar,
} from 'semantic-ui-react';

import { MenuItems } from '../../components/Header';

import { actionCreators } from '../../store/ducks/layout';

import mainRoutes from '../../routes/mainRoutes.js';

import Footer from '../../components/Footer/Footer.js';

const mapStateToProps = state => ({
  sidebar: state.layout.sidebar,
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

const switchRoutes = (
  <Switch>
    {mainRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      return <Route exact={prop.exact} path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

const Main = ({ sidebar, sidebarHide, ...rest }) => (
  <Fragment>
    <Sidebar as={Menu} animation='overlay' inverted vertical onHide={sidebarHide} visible={sidebar}>
      <MenuItems onClick={sidebarHide} />
    </Sidebar>
    <Sidebar.Pusher dimmed={sidebar} style={{ minHeight: '100vh' }}>
        <div id="content">
          {switchRoutes}
        </div>
        <Footer />
    </Sidebar.Pusher>
  </Fragment>
);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Main);
