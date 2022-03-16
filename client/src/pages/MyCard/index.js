import React from 'react';
import Card from '../../components/Card';
import { QUERY_USER } from '../../utils/queries';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

const Profile = () => {

  const { id } = useParams();  
  const { loading, data } = useQuery(QUERY_USER, {
      variables: { _id: id }
    });

  if (loading) {
    return(
      <h4>Loading...</h4>
    )
  }
  if (data) {
    return(
      <>
          <Card data={data.user.cards[0]} />
      </>
    )      
  }

}

export default Profile;