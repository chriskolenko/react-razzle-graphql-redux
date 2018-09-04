import React from 'react';
import { connect } from 'react-redux';

import {
  Container,
  List,
  Segment,
  Image,
} from 'semantic-ui-react';

import './Footer.css';

const mapStateToProps = state => ({
  version: state.version,
});

const Footer = ({ version }) => (
  <footer>
    <Segment vertical className='stripe'>
      <Container textAlign='center'>
        <Image centered size='mini' src='/images/logo.png' />
        <List horizontal divided link>
          <List.Item as='a' href='/'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='/'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='/'>
            Privacy Policy
          </List.Item>
          <List.Item>
            v{version}
          </List.Item>
        </List>
      </Container>
    </Segment>
  </footer>
);

export default connect(mapStateToProps)(Footer);
