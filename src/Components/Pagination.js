import React from 'react'; 


const Pagination = ({jobsPerPage , totalJobs , paginate , currentPage}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
        pageNumbers.push(i);
    }
    
    return (
        <nav>
            <ul className = 'pagination'>
                {pageNumbers.length !== 0 && pageNumbers.map(number => (
                     <li key={number} className = {`pagination-item ${number === currentPage ? 'active' : ''}`} onClick = {() => paginate(number)}>
                        <span>{number}</span>
                     </li>
                ))}
            </ul>
        </nav>
    )
}


export default Pagination ;