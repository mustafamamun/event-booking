import express from "express";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import Events from "./modules/events";
import Login from "./modules/login";
import "./db";
import { corsConfig } from "./utils/config/app-config";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsConfig));

const server = new ApolloServer({ modules: [Events, Login] });
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
