import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import configureStore from '../store/configureStore';
import App from '../containers/App';

const store = configureStore(window.__PRELOADED_STATE__);
const env = window.env || {};

const client = new ApolloClient({
  link: new HttpLink({
    uri: env.graphqlURI,
    credentials: 'include',
  }),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  ssrMode: true
});

hydrate(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
  module.hot.accept('../containers/App', () => {
    hydrate(
      <ApolloProvider client={client}>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </ApolloProvider>,
      document.getElementById('root')
    );
  });
}
