import React from 'react';
import {useParams} from 'react-router-dom'

const Offer = () => {
    let { job_id } = useParams();
    return (
        <div>
            <h1> Detail : {job_id} </h1>
        </div>
    )
}


export default Offer ;