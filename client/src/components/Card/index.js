import React from 'react';
import './style.css';
import {HiOutlineMailOpen } from 'react-icons/hi';
import {BsFillTelephoneForwardFill} from 'react-icons/bs';
import {IoIosBusiness} from 'react-icons/io';
import {CgWebsite} from 'react-icons/cg';
import {AiFillInstagram} from 'react-icons/ai';

const Card = ({ data }) => {

    if (!data) {
        return <h3>No data here yet!</h3>;
      }
    
    return(
        <>
        <div className="card">
            <div className='intro'>
                <h4>{data.firstName} {data.lastName}</h4>
                {data.pronouns && (
                    <p className="pronouns">({data.pronouns})</p>
                )}
                {data.tagline && (
                    <p className="tagline">{data.tagline}</p>
                )} 
            </div>
            {data.img && (
                <div className='card-img'>
                    <img alt ={data.usernmae} src={data.img}/>
                </div>
                )} 
            <ul>
                {data.company && (
                    <li>
                        <IoIosBusiness /> 
                        {data.company}
                    </li>
                )}
                {data.title && (
                    <li>
                        {data.title}
                    </li>
                )}
                <li>
                    <HiOutlineMailOpen /> {data.email}
                </li>
                {data.phone && (
                    <li>
                        <BsFillTelephoneForwardFill /> 
                        {data.phone}
                    </li>
                )}
                {data.website && (
                    <li>
                        <CgWebsite />
                        <a href={data.website}> {data.website}</a>
                    </li>
                )}
                {data.linkedIn && (
                    <li>
                        <CgWebsite /> 
                        {data.linkedIn}
                    </li>
                )}
                {data.instagram && (
                    <li>
                        <AiFillInstagram />  
                        {data.instagram}
                    </li>
                )}
            </ul>            
        </div>
        </>
    )
}

export default Card;