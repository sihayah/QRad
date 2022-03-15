import React from 'react';
import './style.css';

const Card = ({ cards }) => {

    if (!cards) {
        return <h3>No cards here yet!</h3>;
      }
    
    return(
        <>
        <div className="card">
            <div className='intro'>
                <h4>prefferedName</h4>
                <p className="pronouns">({cards.pronouns})</p>
                <p className="tagline">{cards.tagline}</p>     
            </div>
            <div className='card-img'>
                <img src = {cards.img}/>
            </div>
            <ul>
                <li>{cards.company}{cards.title}</li>
                <li>{cards.email}</li>
                <li>{cards.phone}</li>
                <li><a href={cards.website}>{cards.website}</a></li>
                <li>{cards.linkedIn}</li>
                <li>{cards.instagram}</li>
            </ul>            
        </div>
        </>
    )
}

export default Card;