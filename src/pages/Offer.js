import React, { useEffect , useContext, useState} from 'react';
import { Link , useParams , useLocation} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Store } from '../Context/JobsContext';
import moment from 'moment';
const Offer = () => {
    // get job id from router params
    const { job_id } = useParams();
    const { pathname } = useLocation();
    // create local state for job
    const [job , setJob] = useState({});
    // get fetched jobs from store
    const {state} = useContext(Store);

   useEffect(() => {
        window.scrollTo(0, 0);
       const handleJobChange = () => {
            console.log(job_id);
            const current = state.jobs.filter(item => item.id === job_id)
            setJob(current[0])
        }
        handleJobChange();
        
   } , [job_id] , [pathname] );

    return (
        <div className = "offer-detail__wrapper">
            <div className = "left-sidebar" >
                <Link to = '/' className = 'back-link' >
                    <FontAwesomeIcon icon='long-arrow-alt-left'  size="sm" className = "back-icon" />
                    Back to Search
                </Link>

                <h2 className = "howto-apply">how to apply</h2>

                <p className = "contact-info">
                    {job.how_to_apply}
                </p>

            </div>

            <div className = 'offer-detail'>
                <div className = "job-title__wrapper"> 
                    <h1 className ='job-title'>{job.title}</h1>
                    <span className = 'job-type'>{job.type}</span>
                </div>

                <span className ="publish-time">
                    <FontAwesomeIcon icon='clock'  size="lg" className = "icon" />
                    {moment(new Date(job.created_at)).startOf('day').fromNow()}
                </span>

                <div className = "about-company">
                    <div className = 'company-logo'>
                        <img className="" height="auto" width = "auto" alt={job.company} src={job.company_logo || require("../assets/imgs/unnamed.png")}  />
                    </div> 
                    <div className = "company-info" >
                        <h3 className ='company-name'>{job.company}</h3>
                        <span className  = 'company-location'>
                            <FontAwesomeIcon icon='globe-africa'  size="lg" className = "icon" />
                            {job.location}
                        </span>
                    </div>
                </div>


                <div className ='job-description'>
                    <p>
                        {job.description}
                    </p>
                </div>

            </div>

        </div>
    )
}


export default Offer ;