const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    cards: [Card!]!
    contacts: [User!]!
  }
  type Card {
    _id: ID
    tagline: String
    preferredName: String
    pronouns: String
    title: String
    company: String
    email: String!
    phone: String
    linkedIn: String
    instagram: String
    website: String
  }

  type Auth {
    token: ID!
    user: User!
  }

  type Query {
    me: User!
    users: [User!]!
    user(username: String!): User!
    cards: [Card!]!
    card(_id: ID!): Card!
  }

  type Mutation {
    login(email: String!, password: String!): Auth!
    addUser(username: String!, email: String!, password: String!): Auth!
    addCard(tagline: String, preferredName: String, pronouns: String, title: String, company: String, email: String!, phone: String, linkedIn: String, instagram: String, website: String): Card
    addContact(_id: ID!): User!
    removeContact(_id: ID!): User!
  }
`;

module.exports = typeDefs;
