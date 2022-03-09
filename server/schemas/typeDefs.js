const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
  password: String
  cards: [Cards]
  contacts: [User]

}
  type Card {
    _id: ID
tagline: String
preferredName: String
pronouns: String
title: String
company: String
email: String
phone: String
linkedIn: String
Instagram: String
website: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(_id: ID!): Thought
}
  type Query {
    cards: [Cards]!
    card(_id: ID!): Cards
  }

  // type Mutation {
  //   login(email: String!, password: String!): Auth
  //   addUser(username: String!, email: String!, password: String!): Auth
  //   addCard(cardText: String!): Thought
  //   addContact(_id: ID!): User
  // }

  //   addUser(thoughtText: String!, thoughtAuthor: String!): Thought
  //   addComment(thoughtId: ID!, commentText: String!): Thought
  //   removeThought(thoughtId: ID!): Thought
  //   removeComment(thoughtId: ID!, commentId: ID!): Thought
  // }
`;

module.exports = typeDefs;
