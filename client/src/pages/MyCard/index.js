import React from 'react';
import Card from '../../components/Card';
import { QUERY_ME } from '../../utils/queries';
import { useQuery } from '@apollo/client';

const Profile = () => {

const { data } = useQuery(QUERY_ME);
console.log(data.me._id)

  return(
    <>
        <Card data={data.me.cards[0]} />
    </>
  )    
}

export default Profile;