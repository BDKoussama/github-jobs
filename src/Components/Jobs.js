import React, { useContext} from 'react'; 

import { Store } from '../Context/JobsContext';
import Spinner from './Spinner';

import JobsList from './JobsList';

const Jobs = () => {

    const {state} = useContext(Store) ; 

    const {isLoading , error , jobs} = state ;

    if (!jobs) {
        return <></>
    }

    return (
        <div className = "jobs-list">
            {isLoading && (<Spinner/>)}
            {error && (<h2>Error. Try Refreshing...</h2>)}
            {jobs.length !== 0 && <JobsList jobs = {jobs} /> }
        </div>
    )
}


export default Jobs ;