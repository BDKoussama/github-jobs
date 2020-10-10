import React from 'react'; 
import JobItem from './JobItem';
import {data} from '../dummy' ;

const JobsList = () => {
    return (
        <div className = "jobs-list">
            <ul>
               {data.map(item => (
                    <JobItem job = {item} key= {item.id} />
               ))}
            </ul>
        </div>
    )
}


export default JobsList ;