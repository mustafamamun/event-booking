import { gql } from "apollo-server-express";
import { Success, LoginSuccess } from "../../../types/types";
export const typeDefs = gql`
  extend type Query {
    login(email: String, password: String): LoginSuccess
  }
  extend type Mutation {
    register(email: String, password: String): Success
  }
  ${Success}
  ${LoginSuccess}
`;
