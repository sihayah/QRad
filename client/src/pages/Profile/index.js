import React from 'react';
import { Redirect, useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';

import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import Auth from '../../utils/auth';
import me from '../../MOCK_ME.json';

const Profile = (props) => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

 // redirect to personal profile page if username is yours
 if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
  return <Redirect to="/profile" />;
}

if (loading) {
  return <div>Loading...</div>;
}

if (!user?.username) {
  return (
    <h4>
      You need to be logged in to see this. Use the navigation links above to
      sign up or log in!
    </h4>
  );
}
  if (!me.cards) {
      return(
          <>
            <Link to='/editform'>
              Create my QRad 
            </Link>
              
          </>
      )
  };

  return(
    <Link to='/editform'>
      Update my QRad

  <div>
  <div className="flex-row mb-3">
    <h2 className="bg-dark text-secondary p-3 display-inline-block">
      Viewing {userParam ? `${user.username}'s` : 'your'} profile.
    </h2>
  </div>

    <div className="col-12 col-lg-3 mb-3">
      <Contacts
        username={user.username}
        friends={user.friends}
      />
    </div>
  </div>
  </Link>

   )    
}

export default Profile;