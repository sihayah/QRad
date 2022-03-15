import React from 'react';
import './style.css';
import {HiOutlineMailOpen } from 'react-icons/hi';
import {BsFillTelephoneForwardFill} from 'react-icons/bs';
import {IoIosBusiness} from 'react-icons/io';
import {CgWebsite} from 'react-icons/cg';
import {AiFillInstagram} from 'react-icons/ai';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {MdOutlineBusinessCenter} from 'react-icons/md';

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
                        <MdOutlineBusinessCenter />
                        {data.title}
                    </li>
                )}
                <li>
                    <HiOutlineMailOpen /> 
                    <a href={`mailto:${data.email}`}>{data.email}</a>
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
                        <a href={data.website}> website</a>
                    </li>
                )}
                {data.linkedIn && (
                    <li>
                        <AiOutlineLinkedin /> 
                        <a href={data.linkedIn}> linkedIn</a>
                    </li>
                )}
                {data.instagram && (
                    <li>
                        <AiFillInstagram />  
                        <a href={data.instagram}> Instagram</a>
                    </li>
                )}
            </ul>            
        </div>
        </>
    )
}

export default Card;