import React, { useContext } from 'react'; 
import JobItem from './JobItem';
import {data} from '../dummy' ;
import { Store } from '../Context/JobsContext';

const JobsList = () => {

    const {state} = useContext(Store) ; 

    const {isLoading , error , jobs} = state ;

    if (!jobs) {
        return <></>
    }

    return (
        <div className = "jobs-list">
            {isLoading && (<h1>Loading ... </h1>)}
            {error && (<h2>Error. Try Refreshing...</h2>)}
            {jobs.length !==0 && <ul>
                        {data.map(item => (
                                <JobItem job = {item} key= {item.id} />
                        ))}
                    </ul>
            }
        </div>
    )
}


export default JobsList ;