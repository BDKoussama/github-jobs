import React , {useState} from 'react'; 
import Pagination from './Pagination' ;
import JobItem from './JobItem';

const JobsList = ({jobs}) => {
    const [currentPage , setCurrentPage] = useState(1);
    const [jobsPerPage ] = useState(5);

    // get current posts
    const indexOfLastJob = currentPage * jobsPerPage ; 
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob , indexOfLastJob);

    // change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            <ul>
                {currentJobs.map(item => (
                    <JobItem job = {item} key= {item.id} />
                ))}
            </ul>

            <Pagination jobsPerPage = {jobsPerPage} 
                        totalJobs = {jobs.length} 
                        paginate = {paginate}  
                        currentPage = {currentPage}
            />
        </>
    )
}




export default JobsList ;