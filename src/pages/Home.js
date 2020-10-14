import React , {useContext , useState , useEffect} from 'react';
import Search from '../Components/Search';
import {Store} from '../Context/JobsContext';
import SearchFilters from '../Components/SearchFilters' ;
import Jobs from '../Components/Jobs' ;

const useFormInput = (initvalue) => {

    const [value , setValue] = useState(initvalue) ;
    const onChange = (e) => {
        setValue(e.target.value) ;
    }

    return {
        value ,
        onChange
    }
}

const Home = () => {

    const {searchJobs} = useContext(Store);

    const search = useFormInput('');

    const [fullTime , setFullTime] = useState(false); 
     
    const [locations , setLocations] = useState([
        { name : 'London' , label :'london'  , isChecked : false },
        {  name : 'Berlin'  , label :'berlin' , isChecked : false },
        {  name : 'Amsterdam' , label :'amsterdam' , isChecked : false },
        {  name : 'Newyork' , label :'newyork' , isChecked : false }
    ]);
   
    const handleSubmit =  (e) => {
        e.preventDefault(); 
        let desc = search.value ; 
        let location = 'berlin';
        let fulltime = fullTime ;
        searchJobs(desc , location , fulltime);
    }
    
    const handleChange = (event) => {
        let arr = locations.map(item => {
            if(item.label === event.target.value) {
                item.isChecked = !item.isChecked
            }
            return item ;
        })
        setLocations(arr);
    }

    useEffect(() => {
        // update jobs list 
        let desc = search.value ; 
        let location = 'berlin';
        let fulltime = fullTime ;

        searchJobs(desc ,location, fulltime );

    } , [fullTime , locations] ) ;


    return (
        <>
            <Search search = {search} handleSubmit = {handleSubmit}/>
            <div className = 'search-result'>
                <SearchFilters handleChange = {handleChange} 
                               locations = {locations}
                               fullTime = {fullTime}
                               setFullTime = {setFullTime}
                />
                <Jobs/>
            </div>
        </>
    )
}


export default Home ;