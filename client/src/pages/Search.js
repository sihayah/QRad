
import "./search.css";
import json from "./MOCK_DATA.json";
import React, {useState} from 'react'
import {HiOutlineMailOpen } from 'react-icons/hi';
import {BsFillTelephoneForwardFill} from 'react-icons/bs';
import {IoIosBusiness} from 'react-icons/io';
import {CgWebsite} from 'react-icons/cg';
import {BsLinkedin} from 'react-icons/bs';
import {FaTwitterSquare} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';

function Search() {
  
    const [searchTerm, setSearchTerm] = useState('')
    const [show, setShow] = useState(false)
    
   
    return (
      <div className="Search">
        <center>
        <input type="text" 
        placeholder="Search Contacts..." 
        onChange={event => {setSearchTerm(event.target.value);
         }}
        />
        <hr/>
        
        {json.filter((val) => {
            if (searchTerm ==="") {
               return ('') 
            } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            } else if (val.last_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            } else if (val.company_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            }  else if (val.phone.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            } else if (val.website.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            } else if (val.linkedin.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            } else if (val.twitter.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            } else if (val.instagram.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            }
        }).map((val, key)=> {

            return (
            <div className="user" key={key}> 
            <p>{val.first_name} , {val.last_name}</p>
                {              
                show?<p><BsFillTelephoneForwardFill/> {val.phone} <p> <IoIosBusiness/> {val.company_name}</p> 
                <a href="mailto:"><HiOutlineMailOpen/> {val.email}</a>
                <br/>
                <a href={val.website} target='_blank'><CgWebsite/> Website</a> 
                <br/>
                <a href={val.linkedin} target='_blank'><BsLinkedin/> Linkedin</a>
                <br/>
                <a href={val.twitter}><FaTwitterSquare/> Twitter</a> 
                <br/>
                <a href={val.instagram} target='_blank'><AiFillInstagram/> Instagram</a></p>:null
                }

             <button onClick={() =>setShow(!show)}>Show Contact Info</button>
             
            </div>
            );
        })}
        </center>
    </div>
    );
}

export default Search ;