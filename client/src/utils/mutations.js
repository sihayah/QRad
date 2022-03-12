import { gql } from '@apollo/client';

export const ADD_THOUGHT = gql`
  mutation addThought($thoughtText: String!, $thoughtAuthor: String!) {
    addThought(thoughtText: $thoughtText, thoughtAuthor: $thoughtAuthor) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

query users {
  users {
  username
  _id
  email
    
      
    }}

    query user($username: String!) {
      user(username: $username) {
    username
    email
      cards{
        email
        _id
      }
    }}

    query {
      me {
        _id
        username
        email
        contacts{
          username
        _id}
      }}
  
      mutation addUser($username: String!, $password: String!, $email: String!) {
        addUser(username: $username, password: $password, email: $email) {
            token
          user {
              username
              email
              _id}
          }
      }

      mutation login($email: String!, $password: String!){
        login(email: $email, password: $password) {
          user {
            _id
            username
            email
            }
            token
          }
        }

        mutation addContact($_id: ID!) {
          addContact(_id: $_id) {
                username
            email
          }}

          mutation removeContact($_id: ID!) {
            removeContact(_id: $_id) {
                  username
              email
            }}

            mutation addCard($_id: ID!){
              addCard ( _id: $_id){
                email
                
              }}

