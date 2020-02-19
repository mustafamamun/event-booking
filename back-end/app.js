import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import passport from 'passport';
import passportstrategy from './services/passport-service';
import Events from './modules/events';
import Login from './modules/login';
import './db';
import { corsConfig } from './utils/config/app-config';
import router from './auth-routes/index';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsConfig));
app.use(passport.initialize());
passportstrategy(passport);
app.use(router);

const server = new ApolloServer({
  modules: [Events, Login],
  formatError: err => {
    return {
      message: err.message || 'Internal server error',
      code: err.extensions.exception.code
    };
  },
  context: req => ({ ...req })
});
server.applyMiddleware({ app });

app.listen({ port: 10013 }, () =>
  console.log(`🚀 Server ready at http://localhost:10013${server.graphqlPath}`)
);
