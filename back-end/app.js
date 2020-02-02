import express from "express";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import Events from "./modules/events";

const server = new ApolloServer({ modules: [Events] });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["PUT", "POST", "GET", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Content-Length",
      "Authorization",
      "Accept",
      "X-Requested-With",
      "x-access-token"
    ]
  })
);
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
