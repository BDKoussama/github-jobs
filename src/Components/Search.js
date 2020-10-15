import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Search = ({handleSubmit , params , onChange}) => {
    return (
        <div className ='searchbar-wrapper'>
            <form className ='search-form' onSubmit = {handleSubmit}>
                <FontAwesomeIcon icon='suitcase'  size="xs" className="search-form__icon"/>
                <input type = 'text' 
                       name="description" 
                       className = 'text-input' 
                       placeholder= 'Title, companies, expertise or benefits' 
                       value = {params.description || ''} 
                       onChange = {onChange} />
                <input type='submit' className = 'button-input' value='Search'/>
            </form>
        </div>
    )
}

export default Search ;