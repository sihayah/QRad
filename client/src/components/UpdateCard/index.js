import React from 'react';
import { QUERY_ME } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { idbPromise } from '../../utils/helpers';
import '../UpdateCard/style.css';

const UpdateCard = () => {
    const { data } = useQuery(QUERY_ME);
    // let firstName;
    if (data) { 
    const currentCard = data.me.cards[0];
    
    let firstName = currentCard.firstName;
    idbPromise('cards', 'put', currentCard)
    console.log(firstName) 
    }

    idbPromise('cards', 'get');
    

    return (
        <h2>woooo</h2>
    )
};

export default UpdateCard;