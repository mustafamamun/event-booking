import { gql } from "apollo-server-express";
import {
  Event,
  EventsQuery,
  EventDetails,
  UserDetails
} from "../../../types/types";
export const typeDefs = gql`
  type Query {
    events(eventsQuery: EventsQuery): [Event!]!
    event(id: String): EventDetails
  }
  ${EventDetails}
  ${EventsQuery}
  ${Event}
  ${UserDetails}
`;
