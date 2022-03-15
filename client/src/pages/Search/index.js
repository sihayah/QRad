
import "./style.css";
import json from "./data/MOCK_DATA.json";
import React, {useState} from 'react'
import Card from '../../components/Card';
import ContactList from '../../components/Contacts';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_CONTACT } from "../../utils/mutations";
import { QUERY_ME } from "../../utils/queries";
import Auth from '../../utils/auth';

function Search() {
  
    const [searchTerm, setSearchTerm] = useState('')
    // const [show, setShow] = useState(false)
    const addContact = useMutation(ADD_CONTACT);
    const { data } = useQuery(QUERY_ME);
    let user = {};

    if (Auth.loggedIn()) {
        const user = data.me;
      }

    const handleClick = async () => {
        try {
          await addContact({
            variables: { id: user._id }
          });
        } catch (e) {
          console.log(e)
        }
      };
   
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
            // } else if (val.firstName.toLowerCase().includes(searchTerm.toLowerCase())) {
            //     return val
            } else if (val.lastName.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            } 
            // else if (val.company.toLowerCase().includes(searchTerm.toLowerCase())) {
            //     return val
            // }  else if (val.phone.toLowerCase().includes(searchTerm.toLowerCase())) {
            //     return val
            // } else if (val.website.toLowerCase().includes(searchTerm.toLowerCase())) {
            //     return val
            // } else if (val.linkedin.toLowerCase().includes(searchTerm.toLowerCase())) {
            //     return val
            // } else if (val.instagram.toLowerCase().includes(searchTerm.toLowerCase())) {
            //     return val
            // }
        }).map((val, key)=> {
            return (
            <div className="user" key={key}> 
            {/* <p>{val.first_name} , {val.last_name}</p> */}
                <Card data= {val}/>
                {/* {              
                show?<p><BsFillTelephoneForwardFill/> {val.phone} <p> <IoIosBusiness/> {val.company_name}</p> 
                <a href="mailto:"><HiOutlineMailOpen/> {val.email}</a>
                <br/>
                <a href={val.website} target='_blank'><CgWebsite/> Website</a> 
                <br/>
                <a href={val.linkedin} target='_blank'><BsLinkedin/> Linkedin</a>
                <br/>
                <a href={val.instagram} target='_blank'><AiFillInstagram/> Instagram</a></p>:null
                } */}

             <button onClick={handleClick}>Add Contact</button>
             
            </div>
            );
        })}
        {user.contacts && 
          <ContactList /> 
          }
        </center>
    </div>
    );
}

export default Search ;