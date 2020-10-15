import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SearchFilters = ({ handleSubmit , onFulltimeChange , params , onChange}) => {

    const locations  = [
        {  name : 'London' , label :'london'  , isChecked : false },
        {  name : 'Berlin'  , label :'berlin' , isChecked : false },
        {  name : 'Amsterdam' , label :'amsterdam' , isChecked : false },
        {  name : 'Newyork' , label :'newyork' , isChecked : false }
    ];

    return (
        <form className ="search-filters" onSubmit = {handleSubmit}>

            <label className="container-checkbox">Full time
                <input type="checkbox"  name= "full_time" onChange = {onFulltimeChange} />
                <span className="checkmark"></span>
            </label>

            <div className = "location-form">

                <h2 className ="location-form__title">Location</h2>

                <div className = "city-input">
                    <FontAwesomeIcon icon='globe-africa'  size="sm" className="location-icon"/>
                    <input type="text" placeholder = "City, state, zip code or country" name = 'location' value = {params.location || ''} onChange = {onChange}/>
                </div>

                <>
                    {locations.map((item , index) => (
                        <label className="container-checkbox" key = {`key_${index}`}>{item.name}
                            <input 
                                type="checkbox" 
                                name = "location"   
                               // checked = {location.value === item.label}
                                checked = {params.location === item.label}
                                value = {item.label}  
                                onChange = {onChange}
                            />
                            <span className="checkmark"></span>
                        </label>
                    ))}
                </>
            </div>
            <input type='submit' className = 'button-input' value='Apply Filters'/>
        </form>
    )
}


export default SearchFilters ;


