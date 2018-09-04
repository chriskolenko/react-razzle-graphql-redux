import React from 'react';
import { compose } from 'redux';
import { NavLink, withRouter } from 'react-router-dom';

import {
  Button,
  Container,
  Icon,
  Header,
} from 'semantic-ui-react';

const Hero = () => (
  <Container text>
    <Header
      as='h1'
      size='huge'
      content='My large hero'
      inverted
      style={{
        fontSize: '4em',
        fontWeight: '400',
        marginBottom: 0,
        margin: '3em 0 0',
      }}
    />
    <Header
      as='h2'
      content='Your welcome world!'
      inverted
      style={{
        fontSize: '1.7em',
        fontWeight: '400',
        margin: '1.5em 0 1.5em',
      }}
    />
    <Button as={NavLink} primary size='huge' to='/example'>
      Get Started
      <Icon name='right arrow' />
    </Button>
  </Container>
);

export default compose(
  withRouter,
)(Hero);
