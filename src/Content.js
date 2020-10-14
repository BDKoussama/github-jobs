import React from 'react'; 
import SearchFilters from './Components/SearchFilters' ;
import Jobs from './Components/Jobs' ;

const Content = () => (
    <div className = 'search-result'>
        <SearchFilters/>
        <Jobs/>
    </div>
)


export default Content ; 