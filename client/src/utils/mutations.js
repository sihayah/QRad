import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      token
      user {
        username
        email
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        _id
        username
        email
      }
      token
    }
  }
`;

export const ADD_CONTACT = gql`
  mutation addContact($_id: ID!) {
    addContact(_id: $_id) {
      _id
      username
      email
    }
  }
`;

export const REMOVE_CONTACT = gql`
  mutation removeContact($_id: ID!) {
    removeContact(_id: $_id) {
      username
      email
    }
  }
`;

export const ADD_CARD = gql`
  mutation addCard(
    $tagline: String
    $firstName: String
    $lastName: String
    $pronouns: String
    $title: String
    $company: String
    $email: String!
    $phone: String
    $linkedIn: String
    $instagram: String
    $website: String
    $avatar: String
  ) {
    addCard(
      tagline: $tagline
      firstName: $firstName
      lastName: $lastName
      pronouns: $pronouns
      title: $title
      company: $company
      email: $email
      phone: $phone
      linkedIn: $linkedIn
      instagram: $instagram
      website: $website
      avatar: $avatar
    ) {
      _id
      tagline
      firstName
      lastName
      pronouns
      title
      company
      email
      phone
      linkedIn
      instagram
      website
      avatar
    }
  }
`;

export const UPDATE_CARD = gql`
  mutation updateCard(
    $_id: ID!
    $tagline: String
    $firstName: String
    $lastName: String
    $pronouns: String
    $title: String
    $company: String
    $email: String
    $phone: String
    $linkedIn: String
    $instagram: String
    $website: String
  ) {
    updateCard(
      _id: $_id
      tagline: $tagline
      firstName: $firstName
      lastName: $lastName
      pronouns: $pronouns
      title: $title
      company: $company
      email: $email
      phone: $phone
      linkedIn: $linkedIn
      instagram: $instagram
      website: $website
    ) {
      tagline
      firstName
      lastName
      pronouns
      title
      company
      email
      phone
      linkedIn
      instagram
      website
    }
  }
`;
