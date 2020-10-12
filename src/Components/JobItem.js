import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom' ;
import moment from 'moment' ;
const JobItem = ({job}) => {
    return (

            <li className ='job-item'>
                <div className ="company-image" style = {{backgroundImage: `url(${job.company_logo})`}}> 
                </div>
                <div className ="job-info">
                <h3 className ="company-name">{job.company}</h3>
                <Link to = {`/${job.id}`}>
                     <h1 className = "job-title">{job.title}</h1>
                </Link>
                <div className ="other-info">
                        <span className = 'job-type'>{job.type}</span>
                    <div className ='job-time_location'>
                        <span className = "job-location">
                                <FontAwesomeIcon icon='globe-africa'  size="lg" className="icon"/>
                                {job.location}
                        </span>
                        <span className = "publish-time" >
                                <FontAwesomeIcon icon= "clock"   size="lg" className="icon"/>
                                {moment(new Date(job.created_at)).startOf('day').fromNow()}
                        </span>
                    </div>
                </div>
                </div>
            </li>
    )
}


export default JobItem ;