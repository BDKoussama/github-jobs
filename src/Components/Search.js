import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Search = () => (
    <div className ='searchbar-wrapper'>
        <form className ='search-form'>
            <FontAwesomeIcon icon='suitcase'  size="xs" className="search-form__icon"/>
            <input type = 'text' className = 'text-input' placeholder= 'Title, companies, expertise or benefits'/>
            <input type='submit' className = 'button-input' value='Search'/>
        </form>
    </div>
)

export default Search ;