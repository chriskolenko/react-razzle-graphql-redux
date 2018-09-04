import compression from 'compression'
import {minify} from 'html-minifier'
import React from 'react';
import express from 'express';
import { StaticRouter } from 'react-router-dom';
import serialize from 'serialize-javascript';

import 'isomorphic-fetch';
import { ApolloProvider, renderToStringWithData } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Helmet } from "react-helmet";

import App from '../containers/App';
import configureStore from '../store/configureStore';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const html = ({ helmet, markup, state, cache, env }) => {
  return `<!doctype html>
<html ${helmet.htmlAttributes.toString()}>
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta charSet='utf-8' />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  ${helmet.title.toString()}
  ${helmet.meta.toString()}
  ${helmet.link.toString()}
  ${assets.client.css
  ? `<link rel="stylesheet" href="${assets.client.css}">`
  : ''}
  <link rel="stylesheet" href="/styles/semantic.simplex.min.css"></link>
  ${process.env.NODE_ENV === 'production'
  ? `<script src="${assets.client.js}" defer></script>`
  : `<script src="${assets.client.js}" defer crossorigin></script>`}
</head>
<body ${helmet.bodyAttributes.toString()}>
  <div id="root">${markup}</div>
  <script>
    window.__PRELOADED_STATE__ = ${serialize(state)}
    window.__APOLLO_STATE__ = ${serialize(cache.extract())}
    window.env = ${serialize(env)}
  </script>
</body>
</html>`};

const handler = ({ clientCfg, graphqlCfg, serverCfg, versionCfg }) => {
  const server = express();
  if (serverCfg.secure) {
    server.set('trust proxy', true);
  }

  return server.disable('x-powered-by')
  	.use(compression())
    .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
    .get('/*', async (req, res) => {
      const context = {};
      const initialState = {
        version: versionCfg.number,
        user: req.user,
      }

      const history = createMemoryHistory({
        initialEntries: [req.url],
      });
      const store = configureStore(initialState, history)
      const state = store.getState()

      const client = new ApolloClient({
        link: createHttpLink({
          fetch: fetch,
          uri: graphqlCfg.uri,
          credentials: 'include',
        }),
        cache: new InMemoryCache(),
        ssrMode: true
      });

      const component = (
        <ApolloProvider client={client}>
          <Provider store={store}>
            <StaticRouter context={context} location={req.url}>
              <App />
            </StaticRouter>
          </Provider>
        </ApolloProvider>
      );

      try {
        const markup = await renderToStringWithData(component);
        const helmet = Helmet.renderStatic();
        res.send(minify(
          html({helmet, markup, state, cache: client.cache, env: clientCfg }), {
            collapseWhitespace: true,
            removeComments: true,
            minifyCSS: true,
            minifyJS: true
          })
        );
      } catch (e) {
        console.error('RENDERING ERROR:', e); // eslint-disable-line no-console
        res.status(500).end(
          `An error occurred. \n\n${
            e.stack
          }`
        );
      }
    });
};

export default handler;
