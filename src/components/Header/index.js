import React, { Fragment } from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { NavLink, withRouter } from 'react-router-dom';
import {
  Container,
  Icon,
  Menu,
  Responsive,
  Visibility,
} from 'semantic-ui-react';

import { actionCreators as userActionCreators } from '../../store/ducks/user';
import { actionCreators as layoutActionCreators } from '../../store/ducks/layout';

const mapStateToProps = state => ({
  user: state.user,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...userActionCreators, ...layoutActionCreators }, dispatch)
}

const MenuItems = ({ onClick }) => (
  <Fragment>
    <Menu.Item as={NavLink} onClick={onClick} content='Home' to="/" exact />
    <Menu.Item as={NavLink} onClick={onClick} content='Example' to="/example" />
    <Menu.Item as={NavLink} onClick={onClick} content='About Us' to="/content/about-us" />
  </Fragment>
);

//ui inverted top fixed menu
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fixedMenu: false };
  }

  fixedMenuShow() {
    this.setState({ fixedMenu: true });
  }

  fixedMenuHide() {
    this.setState({ fixedMenu: false });
  }

  render() {
    const { children, invertable, sidebarToggle } = this.props;
    const { fixedMenu } = this.state;

    return (
      <Visibility once={false} onBottomPassed={this.fixedMenuShow.bind(this)} onBottomPassedReverse={this.fixedMenuHide.bind(this)}>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Menu as='nav' fixed={fixedMenu ? 'top' : null} inverted={!fixedMenu && invertable} pointing={!fixedMenu} secondary={!fixedMenu} size='large'>
            <Container>
              <MenuItems />
            </Container>
          </Menu>
        </Responsive>
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Menu as='nav' fixed={fixedMenu ? 'top' : null} inverted={!fixedMenu && invertable} pointing={!fixedMenu} secondary={!fixedMenu} size='large'>
          <Container>
            <Menu.Item onClick={sidebarToggle}>
              <Icon name='sidebar' />
            </Menu.Item>
          </Container>
        </Menu>
        </Responsive>
        {children}
      </Visibility>
    );
  }
}

export {
  MenuItems
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Header);
