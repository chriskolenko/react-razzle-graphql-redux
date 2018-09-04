import React, { Fragment } from 'react';
import { Helmet } from "react-helmet";
import { NavLink, withRouter } from 'react-router-dom';

import {
  Container,
  Header,
} from 'semantic-ui-react';

const unsafe = (html) => ({
  __html: html,
});

const Details = ({ match: { params }, item }) => (
  <Fragment>
    <Helmet>
      <meta name="description" content={item.description} />
      <meta name="keywords" content={item.keywords} />
    </Helmet>
    <Container style={{marginTop: '2em'}}>
      <Header content={item.title} />
      <div dangerouslySetInnerHTML={unsafe(item.html)} />
    </Container>
  </Fragment>
)

const CommunityDetails = ({
  match,
  data: {
    error,
    loading,
    item,
  }
}) => {
  if (error) {
    return <div>Error</div>;
  }

  if (loading) {
    return  <div>Loading</div>;
  }

  if (item) {
    return <Details item={item} match={match} />;
  }
};

export default withRouter(CommunityDetails);
