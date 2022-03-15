import React from 'react'
import Card from '../Card';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from "../../utils/queries";
import Auth from '../../utils/auth';

const Contacts = ({ username, contacts }) => {

    if (!contacts || !contacts.length) {
        return <p className="bg-dark text-light p-3">{username}, make some contacts!</p>;
    }
    
    return(
        <>
            <h3>{username}'s Contacts</h3>
            {contacts.map(contact => (
                <Card data={contact}/>
            ))}        
        </>
    )
}

export default Contacts;
