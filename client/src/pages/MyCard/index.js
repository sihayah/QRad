import React, { useState } from 'react';
import Card from  '../../components/Card';
import Modal from '../../components/Modal';
import { QUERY_USER } from '../../utils/queries';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import './mycard.css'

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
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
        <center>
        <button
          className="qr-btn" 
          onClick={() => setIsOpen(true)}>my QRad
        </button>
        {isOpen && <Modal setIsOpen={setIsOpen} />}
          <Card data={data.user.cards[0]} />
        </center>
      </>
    )      
  }

}

export default Profile;