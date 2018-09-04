import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose, graphql } from 'react-apollo';

import Content from './Content';

import getByID from '../../queries/getByID.js';

const ComposedContent = props => <Content {...props} />

export default compose(
  withRouter,
  graphql(getByID, {
    options: ({ match: { params: { id } } }) => ({
      variables: {
        id,
      },
    }),
  }),
)(ComposedContent);
