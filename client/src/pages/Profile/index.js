import React from 'react';
import { Link } from 'react-router-dom';
import { QUERY_ME } from '../../utils/queries';
import { useQuery } from '@apollo/client';

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
          <>
            <Link to='/editform'>
              Create my QRad 
            </Link>
              
          </>
      )
  }

  return(
    <div>
        <Link to='/editform'>
          Update my QRad 
        </Link>
    <br/>
        <Link to={`/card/${myId}`}>
          View my QRad
        </Link>    
    </div> 
      

  )    
}

export default Profile;