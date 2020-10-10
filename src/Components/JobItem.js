import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const JobItem = () => {
    return (
        <li className ='job-item'>
            <div className ="company-image"> </div>
            <div className ="job-info">
               <h3 className ="company-name">Kasisto</h3>
               <h1 className = "job-title">Front-End Software Engineer</h1>
               <div className ="other-info">
                   <span className = 'job-type'>Full time</span>
                   <div className ='job-time_location'>
                       <span className = "job-location">
                               <FontAwesomeIcon icon='globe-africa'  size="lg" className="icon"/>
                               New York
                       </span>
                       <span className = "publish-time" >
                               <FontAwesomeIcon icon= "clock"   size="lg" className="icon"/>
                               5 days ago
                       </span>
                   </div>
               </div>
            </div>
        </li>
    )
}


export default JobItem ;