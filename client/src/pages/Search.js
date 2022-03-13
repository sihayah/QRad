import "";
import JSONDATA from "../data/MOCK_DATA.json";
import {useState} from 'react';

function Search() {
    const [searchTerm, setSearchTerm] = useState("")
    return (<div className="App">
        <input type="text" 
        placeholder="Search Contacts..." 
        onChange={event => {setSearchTerm(event.target.value);
         }}
        />
        {JSONDATA.filter((val) => {
            if (searchTerm == "") {
               return val 
            } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            }
        }).map((val, key)=> {
            return (
            <di className="user" key={key}>
                     <p>{val.first_name}</p>
            </di>
            );
        })}
    </div>
    );
}

export default Search;