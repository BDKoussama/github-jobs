import axios from 'axios';
import React , {createContext , useReducer} from 'react'; 


const initialState = {
    jobs : [] , 
    isLoading: false , 
    error : ''
} 

export const Store = createContext(initialState);

const StoreProvider = (props) => {

    const [state , dispatch] = useReducer((state , action) => {
        switch (action.type) {
            case 'FETCH_JOBS_BEGIN':
                console.log('FETCH_JOBS_BEGIN');
            return {...state , isLoading : true , error : '' , jobs : []}
            
        
            case 'FETCH_JOBS_FAIL' : 
                console.log('FETCH_JOBS_FAIL')
            return {...state , isLoading : false , error : action.payload}

            
            case 'FETCH_JOBS_SUCCESS' :
                console.log('FETCH_JOBS_SUCCESS')
            return {...state , isLoading : false , error : '' , jobs : action.payload}

            default:
            return null
        }
    } , initialState);

    const searchJobsBegin = () => dispatch({
        type : 'FETCH_JOBS_BEGIN'
    });

    const searchJobsFailed = (error) => dispatch({
        type : 'FETCH_JOBS_FAIL',
        payload : error
    });

    const searchJobsSuccess = (data) => dispatch({
        type : 'FETCH_JOBS_SUCCESS',
        payload : data
    });

    const searchJobs = async (desc) => {
        searchJobsBegin() ;
        try {
            let URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json';
            let data = await axios.get(URL , {
                params: { markdown: true, page: 1 , description : desc }
            })
            .then(res => res.data);
            console.log(data);
            searchJobsSuccess(data);
        } catch (error) {
            searchJobsFailed(error);
        }
    }

    return (
        <Store.Provider value = {{ state , searchJobs }}>
            {props.children}
        </Store.Provider>
    )

}


export default StoreProvider ;