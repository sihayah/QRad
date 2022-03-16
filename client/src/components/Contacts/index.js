import React from 'react';
import Search from '../../pages/Search';
import './contacts.css';

function Contacts() {
    return (
        <div className='contact-page'>
            <h1>my contacts</h1>
            <Search></Search>
        </div>
    )
}

export default Contacts;

// import React from 'react'
// import Card from '../Card';

// const ContactList = ({ username, contacts }) => {

//     if (!contacts || !contacts.length) {
//         return <p className="bg-dark text-light p-3">{username}, make some contacts!</p>;
//     }
    
//     return(
//         <>
//             <h3>{username}'s Contacts</h3>
//             {contacts.map(contact => (
//                 <Card data={contact}/>
//             ))}        
//         </>
//     )
// }

// export default ContactList;
