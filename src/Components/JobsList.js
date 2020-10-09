import React from 'react'; 
import JobItem from './JobItem';


const JobsList = () => {
    return (
        <div className = "jobs-list">
            <ul>
                <JobItem/>
                <JobItem/>
                <JobItem/>
            </ul>
        </div>
    )
}


export default JobsList ;