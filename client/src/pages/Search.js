import "./App.css";
import json from "./MOCK_DATA.json";
import React, {useState} from 'react'

function Search() {
  
    const [searchTerm, setSearchTerm] = useState('')
    const [show, setShow] = useState(false)
    
   
    return (
      <div className="App">
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
            } else if (val.phone.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            }else if (val.website.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            }else if (val.linkedin.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            }else if (val.twitter.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            }else if (val.instagram.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            }
        }).map((val, key)=> {

            return (
            <div className="user" key={key}> 
            <p>{val.first_name} , {val.last_name}</p>
                {              
                show?<p>{val.email} <p>{val.phone}</p> <p>{val.company_name}</p> <p>{val.website}</p> <p>{val.linkedin}</p> <p>{val.twitter}</p> <p>{val.instagram}</p></p>:null
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