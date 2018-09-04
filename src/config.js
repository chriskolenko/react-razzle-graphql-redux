import fs from 'fs';
import uuidv4 from 'uuid/v4';

const PUBLIC_GRAPHQL_URI = process.env.PUBLIC_GRAPHQL_URI || 'http://localhost:4000/graphql';
const PRIVATE_GRAPHQL_URI = process.env.PRIVATE_GRAPHQL_URI || 'http://localhost:4000/graphql';

const PORT = process.env.PORT || 3000;
const EXTERNAL_URL = process.env.EXTERNAL_URL || `http://localhost:${PORT}`;

const SECURE = EXTERNAL_URL.startsWith('https');

const cfg = {
  clientCfg: {
    graphqlURI: PUBLIC_GRAPHQL_URI,
  },
  graphqlCfg: {
    uri: PRIVATE_GRAPHQL_URI,
  },
  serverCfg: {
    port: PORT,
    secure: SECURE,
  },
  versionCfg: {
    number: '0.0.1',
  },
}

export default cfg;
