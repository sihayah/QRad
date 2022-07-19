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

    const relocate = async () => {
        await idbPromise('cards', 'get');
        window.location.assign('/profile')
    }

    relocate();

    return (
        <h3>Updating your business card...</h3>
    )
};

export default UpdateCard;