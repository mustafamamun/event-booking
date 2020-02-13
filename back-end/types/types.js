export const Event = `type Event {
  id: String
  userId: String
  dateTo: String
  dateFrom: String
}`;

export const UserDetails = `type UserDetails {
  id: String
  firstName: String
  lastName: String
  address: String
  age: Int
}`;

export const EventsQuery = `input EventsQuery {
  dateFrom: String!
  dateTo: String!
}`;

export const EventDetails = `type EventDetails {
  id: String
  dateTo: String
  dateFrom: String
  userDetails : UserDetails
}`;

export const Success = `type Success {
  message: String
  status: String
}`;

export const LoginSuccess = `type LoginSuccess {
  message: String
  token: String
}`;
