import React from 'react';
import './style.css';
import {HiOutlineMailOpen } from 'react-icons/hi';
import {BsFillTelephoneForwardFill} from 'react-icons/bs';
import {IoIosBusiness} from 'react-icons/io';
import {CgWebsite} from 'react-icons/cg';
import {AiFillInstagram} from 'react-icons/ai';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {MdOutlineBusinessCenter} from 'react-icons/md';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {

    if (!data) {
        return <h3>No data here yet!</h3>;
      }
    if (data) {
        console.log(data)
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
            {data.avatar && (
                <div className='card-img'>
                    <img alt ={data.usernmae} src={data.avatar} />
                </div>
                )} 
            <ul>
                {data.company && (
                    <li>
                        <IoIosBusiness className='card-icon' /> 
                        {data.company}
                    </li>
                )}
                {data.title && (
                    <li>
                        <MdOutlineBusinessCenter className='card-icon' />
                        {data.title}
                    </li>
                )}
                <li>
                    <HiOutlineMailOpen className='card-icon' />
                    <Link to={{ pathname: data.email }} target="_blank"> {data.eamil} 
                            </Link>
                        
                </li>
                {data.phone && (
                    <li>
                        <BsFillTelephoneForwardFill className='card-icon' /> 
                        {data.phone}
                    </li>
                )}
                {data.website && (
                    <li>
                        <CgWebsite className='card-icon' />
                        <Link to={{ pathname: data.website }} target="_blank"> {data.website} 
                            </Link>
    
                    </li>
                )}
                {data.linkedIn && (
                    <li>
                        <AiOutlineLinkedin className='card-icon' /> 
                        <Link to={{ pathname: "http://wwww.linkedin.com/"+data.linkedIn }} target="_blank"> {data.linkedIn} 
                            </Link>

                    </li>
                )}
                {data.instagram && (
                    <li>
                    
                            <AiFillInstagram className='card-icon' /> 
                            <Link to={{ pathname: "http://wwww.instagram.com/"+data.instagram }} target="_blank"> {data.instagram} 
                            </Link>
                    </li>
                )}
            </ul>            
        </div>
        </>
    )
}

export default Card;