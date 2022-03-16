import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query users {
    users {
      username
      _id
      email
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      username
      email
      cards {
        email
        _id
      }
    } 
  }
`;

export const QUERY_ME = gql`
  query {
    me {
      _id
      username
      email
      contacts {
        username
        _id
      }
      cards {
        firstName
        lastName
        pronouns
        title
        company
        email
        phone
        linkedIn
        website
        instagram
        avatar
      }
    }
  }
`;


