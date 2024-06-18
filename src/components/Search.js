import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchNote }) => {
    return <div className="search">
        <MdSearch className="search-icons" size="1.3em" />
        <input 
            onChange={(event) => 
                handleSearchNote(event.target.value)
            } 
            type="text" 
            placeholder="search..." 
        />
    </div>
};

// search logic is placed in the App.js
// reasoning behind: NotesList rely more on the state, and it's a good idea to 
// keep these states close together
export default Search;