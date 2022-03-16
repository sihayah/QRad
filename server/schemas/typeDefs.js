const { gql } = require("apollo-server-express");

const typeDefs = gql`

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    cards: [Card!]!
    contactCount: Int
    contacts: [User!]!
  }

  type Card {
    _id: ID
    tagline: String
    firstName: String
    lastName: String
    pronouns: String
    title: String
    company: String
    email: String!
    phone: String
    linkedIn: String
    instagram: String
    website: String
    avatar: String
  }

  input CardInput {
    _id: ID!
    tagline: String
    preferredName: String
    pronouns: String
    title: String
    company: String
    email: String!
    phone: String
    linkedIn: String
    Instagram: String
    website: String
  }

  type Auth {
    token: ID!
    user: User!
  }

  type Query {
    me: User!
    users: [User!]!
    user(_id: ID!): User!
    cards: [Card!]!
    card(_id: ID!): Card!
  }

  type Mutation {
    login(email: String!, password: String!): Auth!
    addUser(username: String!, email: String!, password: String!): Auth!
    addCard(avatar: String, tagline: String, firstName: String, lastName: String, pronouns: String, title: String, company: String, email: String!, phone: String, linkedIn: String, instagram: String, website: String): Card!
    updateCard(_id: ID!, tagline: String, firstName: String, lastName: String, pronouns: String, title: String, company: String, email: String, phone: String, linkedIn: String, instagram: String, website: String): Card!
    addContact(_id: ID!): User!
    removeContact(_id: ID!): User!
    deleteCard(_id: ID!): Card!
  }
`;

module.exports = typeDefs;
