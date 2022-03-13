import "";
import json from "../data/MOCK_DATA.json";
import {useState} from 'react'

function Search() {
    const [searchTerm, setSearchTerm] = useState("")
    return (<div className="search">
        <input type="text" 
        placeholder="Search Contacts..." 
        onChange={event => {setSearchTerm(event.target.value);
         }}
        />
        {json.filter((val) => {
            if (searchTerm ==="") {
               return ('')
            } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            }
        }).map((val, key)=> {
            return (
            <di className="user" key={key}>
                     <p>{val.first_name}</p>
                     <p>{val.last_name}</p>
                     <p>{val.company_name}</p>
                     <p>{val.email}</p>
                     <p>{val.phone}</p>
                     
            </di>
            );
        })}
    </div>
    );
}

export default Search;