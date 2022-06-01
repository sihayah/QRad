import React, { useState } from 'react';
import Card from '../../components/Card';
import { QUERY_USER } from '../../utils/queries';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Modal from '../../components/Modal';

const Profile = () => {
  const [isOpen, setToOpen] = useState(false);
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
        <button id="qrad-btn"
          onClick={() => setToOpen(true)}>
            get QRad
        </button>
        {isOpen && <Modal setToOpen={setToOpen} />}
          <Card data={data.user.cards[0]} />
      </>
    )      
  }

}

export default Profile;