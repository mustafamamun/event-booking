import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import Events from './modules/events';
import Login from './modules/login';
import './db';
import { corsConfig } from './utils/config/app-config';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsConfig));

const server = new ApolloServer({
  modules: [Events, Login],
  formatError: err => {
    return {
      message: err.message || 'Internal server error',
      code: err.extensions.exception.code
    };
  }
});
server.applyMiddleware({ app });

app.listen({ port: 10013 }, () =>
  console.log(`🚀 Server ready at http://localhost:10013${server.graphqlPath}`)
);
