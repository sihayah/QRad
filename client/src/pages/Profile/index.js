import React from 'react';
import { Link } from 'react-router-dom';
import { QUERY_ME } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import '../Profile/style.css';

const Profile = () => {
let myId = '';
let myCards = [];
const { data } = useQuery(QUERY_ME);
if (data) { 
  myId = data.me._id;
  myCards = data.me.cards
}

console.log(myCards.length)



  if (myCards.length === 0) {
      return(
          <div className='link-container'>
            <Link to='/editform' className='link'>
              Create my QRad 
            </Link>
              
          </div>
      )
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