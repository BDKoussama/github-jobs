import React, { useEffect, useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SearchFilters = ({handleChange , locations , fullTime , setFullTime}) => {

    return (
        <div className ="search-filters">
            <label className="container-checkbox">Full time
                <input type="checkbox" onChange = {() => setFullTime(!fullTime)}/>
                <span className="checkmark"></span>
            </label>

            <div className = "location-form">

                <h2 className ="location-form__title">Location</h2>

                <div className = "city-input">
                    <FontAwesomeIcon icon='globe-africa'  size="sm" className="location-icon"/>
                    <input type="text" placeholder = "City, state, zip code or country"/>
                </div>

                <>
                    {locations.map((item , index) => (
                        <label className="container-checkbox" key = {`key_${index}`}>{item.name}
                            <input 
                                type="checkbox" 
                                name = {item.name}    
                                value = {item.label}  
                                index = {index}   
                                //checked = {locations[item.name]}              
                                onChange = {handleChange}
                            />
                            <span className="checkmark"></span>
                        </label>
                    ))}
                </>

            </div>
        </div>
    )
}


export default SearchFilters ;



/*
    <label className="container-checkbox">London
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                </label>

                <label className="container-checkbox">Amsterdam
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                </label>

                <label className="container-checkbox">New york
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                </label>

                <label className="container-checkbox">Berlin
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                </label>

*/