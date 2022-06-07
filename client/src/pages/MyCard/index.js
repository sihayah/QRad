import React, { useState } from 'react';
import Card from '../../components/Card';
import { QUERY_USER } from '../../utils/queries';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Modal from '../../components/Modal';
import '../MyCard/style.css';

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
      <div id='mycard-container'>
        <button className='ombre-btn'
          onClick={() => setToOpen(true)}>
            get my QR code
        </button>
        {isOpen && <Modal setToOpen={setToOpen} />}
          <Card data={data.user.cards[0]} />
      </div>
    )      
  }

}

export default Profile;