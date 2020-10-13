import React , {useContext, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Store } from '../Context/JobsContext';

const useFormInput = (initvalue) => {

    const [value , setValue] = useState(initvalue) ;
    const onChange = (e) => {
        setValue(e.target.value) ;
    }

    return {
        value ,
        onChange
    }
}



const Search = () => {

    const search = useFormInput('');

    const {searchJobs} = useContext(Store);

    
    const handleSubmit =  (e) => {
        e.preventDefault(); 
        searchJobs(search.value);
    }

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