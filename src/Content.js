import React from 'react'; 
import SearchFilers from './Components/SearchFilters' ;
import JobsList from './Components/JobsList' ;

const Content = () => (
    <div className = 'search-result'>
        <SearchFilers/>
        <JobsList/>
    </div>
)


export default Content ; 