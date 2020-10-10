import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom' ;

const JobItem = ({job}) => {
    return (

            <li className ='job-item'>
                <div className ="company-image"> </div>
                <div className ="job-info">
                <h3 className ="company-name">{job.company_name}</h3>
                <Link to = {`/${job.id}`}>
                     <h1 className = "job-title">{job.job_title}</h1>
                </Link>
                <div className ="other-info">
                        <span className = 'job-type'>{job.job_type}</span>
                    <div className ='job-time_location'>
                        <span className = "job-location">
                                <FontAwesomeIcon icon='globe-africa'  size="lg" className="icon"/>
                                {job.job_location}
                        </span>
                        <span className = "publish-time" >
                                <FontAwesomeIcon icon= "clock"   size="lg" className="icon"/>
                                {job.publish_time}
                        </span>
                    </div>
                </div>
                </div>
            </li>
    )
}


export default JobItem ;