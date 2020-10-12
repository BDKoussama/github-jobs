import React, { useContext } from 'react'; 
import JobItem from './JobItem';
import { Store } from '../Context/JobsContext';
import Spinner from '../Components/Spinner';

const JobsList = () => {

    const {state} = useContext(Store) ; 

    const {isLoading , error , jobs} = state ;

    if (!jobs) {
        return <></>
    }

    return (
        <div className = "jobs-list">
            {isLoading && (<Spinner/>)}
            {error && (<h2>Error. Try Refreshing...</h2>)}
            {jobs.length !==0 && <ul>
                        {jobs.map(item => (
                                <JobItem job = {item} key= {item.id} />
                        ))}
                    </ul>
            }
        </div>
    )
}


export default JobsList ;