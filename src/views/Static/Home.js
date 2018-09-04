import React, { Fragment } from 'react';
import { Helmet } from "react-helmet";
import { compose } from 'redux';
import { NavLink, withRouter } from 'react-router-dom';

import {
  Button,
  Segment,
  Grid,
  Header,
  Image,
} from 'semantic-ui-react';

import HeaderComponent from '../../components/Header';
import HeroComponent from '../../components/Hero';

const Home = () => (
  <Fragment>
    <Helmet>
      <title>Example Application</title>
    </Helmet>
    <Segment
      inverted
      textAlign='center'
      style={{ minHeight: 700, padding: '1em 0' }}
      vertical
    >
      <HeaderComponent invertable>
        <HeroComponent />
      </HeaderComponent>
    </Segment>
    <Segment style={{ padding: '8em 0' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              To make life easier
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              I copied and pasted my hard work from a side project to make this.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='/images/home/work-life-balance.jpg' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button as={NavLink} to='/example' size='huge'>Nice link</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0' }} vertical>
     <Grid celled='internally' columns='equal' stackable>
       <Grid.Row textAlign='center'>
         <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
           <Header as='h3' style={{ fontSize: '2em' }}>
             "No support for this project"
           </Header>
           <p style={{ fontSize: '1.33em' }}>Our promise</p>
         </Grid.Column>
         <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
           <Header as='h3' style={{ fontSize: '2em' }}>
             "Some sort of random quote"
           </Header>
           <p style={{ fontSize: '1.33em' }}>
             <Image avatar src='/images/home/chris.png' />
             <b>Chris Kolenko</b> Bringer of context.gg
           </p>
         </Grid.Column>
       </Grid.Row>
     </Grid>
   </Segment>
  </Fragment>
);

export default compose(
  withRouter,
)(Home);
