import React , {useContext , useState , useEffect} from 'react';
import Search from '../Components/Search';
import {Store} from '../Context/JobsContext';
import SearchFilters from '../Components/SearchFilters' ;
import Jobs from '../Components/Jobs' ;



const Home = () => {

    const {searchJobs} = useContext(Store);

    const [full_time , setFullTime] = useState(false); 
        
    const [params, setParams] = useState({});

    const handleSearchSubmit =  (e) => {
        e.preventDefault(); 
        searchJobs(params , full_time);
    }
    
    function handleParamChange(e) {
        const param = e.target.name
        const value = e.target.value
        setParams(prevParams => {
          return { ...prevParams, [param]: value }
        })
    }

    const handleFulltimeChange = () => {
        setFullTime(!full_time);
    }
    return (
        <>
            <Search params = {params} 
                    onChange = {handleParamChange} 
                    handleSubmit = {handleSearchSubmit}  
            />

            <div className = 'search-result'>
                <SearchFilters onFulltimeChange = {handleFulltimeChange} 
                               params = {params} 
                               onChange = {handleParamChange} 
                               handleSubmit = {handleSearchSubmit} 
                />
                <Jobs/>
            </div>
        </>
    )
}


export default Home ;