import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Search = ({search , handleSubmit}) => {
    return (
        <div className ='searchbar-wrapper'>
            <form className ='search-form' onSubmit = {handleSubmit}>
                <FontAwesomeIcon icon='suitcase'  size="xs" className="search-form__icon"/>
                <input type = 'text' className = 'text-input' placeholder= 'Title, companies, expertise or benefits' {...search} />
                <input type='submit' className = 'button-input' value='Search'/>
            </form>
        </div>
    )
}

export default Search ;