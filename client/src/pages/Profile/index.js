import React from 'react';
import { Link } from 'react-router-dom';
import { QUERY_ME } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { idbPromise } from '../../utils/helpers';
import '../Profile/style.css';

const Profile = () => {
  let myId = '';
  let myCards = [];
  const { data } = useQuery(QUERY_ME);

  const updateObjectStore = async() => {
    const currentCard = data.me.cards[0];

    console.log(currentCard);

    await idbPromise('cards', 'put', currentCard);
    idbPromise('cards', 'get');
  }

  
  
  if (data) { 
    myId = data.me._id;
    myCards = data.me.cards
  }

  if (myCards.length === 0) {
      return(
          <div className='link-container'>
            <Link to='/editform' className='link'>
              Create my QRad 
            </Link>
              
          </div>
      )
  } else {
    updateObjectStore();
  }

  return(
    <div className='link-container'>
        <Link to='/editform' className='link'>
          Update my QRad 
        </Link>
    
        <Link to={`/card/${myId}`} className='link'>
          View my QRad
        </Link>   
    </div> 
      

  )    
}

export default Profile;