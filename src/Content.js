import React from 'react'; 
import SearchFilters from './Components/SearchFilters' ;
import JobsList from './Components/JobsList' ;

const Content = () => (
    <div className = 'search-result'>
        <SearchFilters/>
        <JobsList/>
    </div>
)


export default Content ; 